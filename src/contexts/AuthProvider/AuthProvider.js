import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

//create context
export const AuthContext = createContext();

//create auth
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    //google login
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    //User logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login with email password
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    //email verification
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    //set observer for getting current user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentuser)=> {
            if(currentuser === null || currentuser.emailVerified) {
                setUser(currentuser);
            }
            setLoading(false)
        })

        return () => {
            unsubscribe()
        };
    }, [user])

    const authInfo = {
        user, 
        loading, 
        providerLogin, 
        logOut, 
        logIn, 
        setLoading,
        verifyEmail,
        updateUserProfile,
        createUser
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;