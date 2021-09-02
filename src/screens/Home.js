import React, { useEffect } from 'react';
import './Home.css';
import { signInWithGoogle, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from "react-router-dom";

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
                        src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"
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
