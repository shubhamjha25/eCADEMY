import React, { useEffect } from 'react';
import './Home.css';
import { signInWithGoogle, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from "react-router-dom";
import Logo from '../logo.PNG';

function Home() {

    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (loading) 
            return;
        if (user) 
            history.push("/dashboard");
    }, [loading, user]);

    return (
        <div>
            <div className="home">
                <div className="home-container">
                    <img
                        src={Logo}
                        alt="Google Classroom Image"
                        className="home-image"
                    />
                    <button className="home-login" onClick={signInWithGoogle}>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
