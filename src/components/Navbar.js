import React, { useState } from "react";
import { Avatar, IconButton, MenuItem, Menu } from "@material-ui/core";
import { Add, Apps, Menu as MenuIcon } from "@material-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebase";
import Logo from '../logo.PNG'
import "./Navbar.css";

function Navbar() {

    const [user, loading, error] = useAuthState(auth);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            
            <nav className="navbar">
                <div className="navbar__left">
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <img
                        src={Logo}
                        alt="Google Logo"
                        className="navbar__logo"
                    />{" "}
                </div>
                <div className="navbar__right">
                    <IconButton
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <Add />
                    </IconButton>
                    <IconButton>
                        <Apps />
                    </IconButton>
                    <IconButton onClick={logout}>
                        <Avatar src={user?.photoURL} />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                    <MenuItem>
                        Create Class
                    </MenuItem>
                    <MenuItem>
                        Join Class
                    </MenuItem>
                    </Menu>
                </div>
            </nav>
        </>
    );
}
export default Navbar;