import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    //google login
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    //User logout
    const logOut = () => {
        return signOut(auth);
    }

    //create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login with email password
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentuser)=> {
            console.log('inside auth State changed:', currentuser);
            setUser(currentuser);
        })

        return () => {
            unsubscribe()
        };
    }, [])

    const authInfo = {user, providerLogin, logOut, logIn, createUser}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;