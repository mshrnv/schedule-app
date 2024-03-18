import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from "./components/AppRouter/AppRouter";
import { AuthContext } from "./context";
import AuthService from './api/AuthService';

function App() {

    const [authData, setAuthData] = useState({
        isAuth: false,
        username: "",
        roles: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const res = await AuthService.check_user()
            console.log(res)

            if (res.success) {
                setAuthData({
                    isAuth: true,
                    username: res.data.user.username,
                    roles: res.data.user.roles
                })
            }
        }
        fetchData();
    }, [])

    return (
        <AuthContext.Provider value={{
            authData,
            setAuthData
        }}>
            <Router>
                <AppRouter />
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
