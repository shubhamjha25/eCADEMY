import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { auth, db } from "../firebase";
import { joinDialogAtom } from "../utils/atoms";

function JoinClass() {

    const [open, setOpen] = useRecoilState(joinDialogAtom);
    const [user, loading, error] = useAuthState(auth);
    const [classId, setClassId] = useState("");
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="joinClass">
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Join class</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter ID of the class to join the classroom
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Class Name"
                        type="text"
                        fullWidth
                        value={classId}
                        onChange={(e) => setClassId(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Join
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default JoinClass;