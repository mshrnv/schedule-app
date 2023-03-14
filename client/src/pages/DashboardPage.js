import React, {useState} from 'react';
import Header from "../components/Header/Header";
import {Calendar} from "rsuite";

const DashboardPage = () => {
    // TODO: Current date
    const [selftrainingDate, setSelftrainingDate] = useState();

    return (
        <div>
            <Header />
            <div className="flex mb-4 w-4/5 mx-auto">
                <div className="flex flex-row w-full">
                    <div className="basis-1/3">
                        <Calendar compact bordered />
                    </div>
                </div>
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