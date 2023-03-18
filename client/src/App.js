import React, {useState} from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from "./components/AppRouter/AppRouter";
import {AuthContext} from "./context";

function App() {

    const [authData, setAuthData] = useState({
        isAuth: false,
        username: "",
        roles: []
    })

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
