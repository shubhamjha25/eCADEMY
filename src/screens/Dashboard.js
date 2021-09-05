import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ClassCard from "../components/ClassCard";

function Dashboard() {

    const [user, loading, error] = useAuthState(auth);
    const [classes, setClasses] = useState([]);

    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (!user) history.replace("/");
    }, [user, loading]);

    return (
        <div className="dashboard">
            {
                classes?.length === 0 
                ? 
                    (
                        <div className="dashboard__404">
                            No classes found! Join or create one!
                        </div>
                    ) 
                : 
                (
                    <div className="dashboard__classContainer">
                        {
                            classes.map((individualClass) => (
                                <ClassCard
                                creatorName={individualClass.creatorName}
                                creatorPhoto={individualClass.creatorPhoto}
                                name={individualClass.name}
                                id={individualClass.id}
                                style={{ marginRight: 30, marginBottom: 30 }}
                                />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}

export default Dashboard;