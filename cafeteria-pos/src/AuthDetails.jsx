import React, {useEffect, useState} from "react";
import { Auth } from "firebase/auth";


function AuthDetails() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
        });
    
        return unsubscribe;
    }, []);
    
    if (loading) {
        return <p>Loading...</p>;
    }
    
    if (!user) {
        return <p>Not logged in</p>;
    }
    
    return (
        <div>
        <p>Logged in as {user.email}</p>
        </div>
    );
    }