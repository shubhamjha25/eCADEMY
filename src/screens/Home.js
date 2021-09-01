import React from 'react';
import './Home.css';

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home-container">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"
                        alt="Google Classroom Image"
                        className="home-image"
                    />
                    <button className="home-login">
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
