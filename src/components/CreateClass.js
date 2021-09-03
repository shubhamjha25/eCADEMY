import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { auth, db } from "../firebase";
import { createDialogAtom } from "../utils/atoms";

function CreateClass() {
    
    const [user, loading, error] = useAuthState(auth);
    const [open, setOpen] = useRecoilState(createDialogAtom);
    const [className, setClassName] = useState("");
    const handleClose = () => {
        setOpen(false);
    };

    const createClass = async () => {
        try {
            const newClass = await db.collection("classes").add({
                creatorUid: user.uid,
                name: className,
                creatorName: user.displayName,
                creatorPhoto: user.photoURL,
                posts: [],
            });

            // Adding to the Current User's Class List (List of Classes)
            const userRef = await db
                .collection("users")
                .where("uid", "==", user.uid)
                .get();
                
            const docId = userRef.docs[0].id;
            const userData = userRef.docs[0].data();
            let userClasses = userData.enrolledClassrooms;

            userClasses.push({
                id: newClass.id,
                name: className,
                creatorName: user.displayName,
                creatorPhoto: user.photoURL,
            });

            const docRef = await db.collection("users").doc(docId);

            await docRef.update({
                enrolledClassrooms: userClasses,
            });

            handleClose();
            
            alert("Classroom Created Successfully!");
        } 
        
        catch (err) {
            alert(`Unable to Create Class - ${err.message}`); 
        }
    };

    return (
        <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Create class</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the name of class and we will create a classroom for you!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Class Name"
                        type="text"
                        fullWidth
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={createClass} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CreateClass;