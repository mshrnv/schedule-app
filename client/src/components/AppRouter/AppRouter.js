import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../../router/routes";
import {AuthContext} from "../../context";

const AppRouter = () => {

    const {authData} = useContext(AuthContext)

    return (
        <Routes>
            {
                authData.isAuth ? (
                    privateRoutes.map(route => (
                        <Route key={route.path} path={route.path} element={route.component} exact={route.exact}/>
                    ))
                ) : (
                    publicRoutes.map(route => (
                        <Route key={route.path} path={route.path} element={route.component} exact={route.exact}/>
                    ))
                )
            }
        </Routes>
    );
};

export default AppRouter;