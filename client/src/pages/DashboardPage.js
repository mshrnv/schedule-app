import React from 'react';
import Header from "../components/Header/Header";
import DashboardSelftraining from "../components/DashboardSelftraining/DashboardSelftraining";
import DashboardTeachers from "../components/DashboardTeachers/DashboardTeachers";
import DashboardClassrooms from "../components/DashboardClassrooms/DashboardClassrooms";

const DashboardPage = () => {
    return (
        <div>
            <Header />
            <div className="fle flex-row mb-4 w-4/5 mx-auto">
                <DashboardSelftraining/>
            </div>
            <hr className="w-4/5 mx-auto"/>
            <div className="flex mb-4 w-4/5 mx-auto">
                <div className="flex w-1/2 justify-center">
                    <DashboardTeachers/>
                </div>
                <div className="flex w-1/2 justify-center">
                    <DashboardClassrooms/>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;