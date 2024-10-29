import React, { createContext, useEffect, useState } from 'react'
import { useAuth, useUser } from 'reactfire';
import { CONFIG } from '../config';
import axios from 'axios';
export const AuthContext = createContext();
export const AuthContextApp = ({ children }) => {
    const { data: user } = useUser();
    const [userInfo, setUserInfo] = useState(null);
    const getInfoUser = () => {
        if (user) {
            axios.get(`${CONFIG.uri}/users/${user.email}`)
                .then(res => {
                    setUserInfo(res.data);
                })
        }
    }
    useEffect(() => {
        getInfoUser()
    }, [])
    const auth = useAuth();
    return (
        <AuthContext.Provider value={{ user, auth, userInfo, getInfoUser }}>
            {children}
        </AuthContext.Provider>
    )
}
