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
                    <Button onClick={handleClose} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CreateClass;