import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth'
import { useState } from 'react';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = { user, loginProvider, createUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;