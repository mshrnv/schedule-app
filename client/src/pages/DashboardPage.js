import React from 'react';
import Header from "../components/Header/Header";
import DashboardSelftraining from "../components/DashboardSelftraining/DashboardSelftraining";

const DashboardPage = () => {
    return (
        <div>
            <Header />
            <div className="flex mb-4 w-4/5 mx-auto">
                <DashboardSelftraining/>
            </div>
            <hr className="w-4/5 mx-auto"/>
            <div className="flex mb-4 w-4/5 mx-auto">
                <div className="flex w-1/2 items-center justify-center">
                    <h3>Преподаватели</h3>
                </div>
                <div className="flex w-1/2 items-center justify-center">
                    <h3>Аудитории</h3>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;