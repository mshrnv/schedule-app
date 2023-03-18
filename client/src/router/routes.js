import SchedulePage from "../pages/SchedulePage";
import SelftrainingPage from "../pages/SelftrainingPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import {Navigate} from "react-router-dom";
import React from "react";

export const privateRoutes = [
    {path: '/schedule', component: <SchedulePage/>, exact: true},
    {path: '/selftraining', component: <SelftrainingPage/>, exact: true},
    {path: '/dashboard', component: <DashboardPage/>, exact: true},
    {path: "*", component: <Navigate to="/schedule" replace />},
]

export const publicRoutes = [
    {path: '/login', component: <LoginPage/>, exact: true},
    {path: "*", component: <Navigate to="/login" replace />},
]