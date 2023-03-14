import React, {useEffect, useState} from 'react';
import {Calendar} from "rsuite";
import SelftrainingService from "../../api/SelftrainingService";
import DashboardSelftrainingTable from "../DashboardSelftrainingTable/DashboardSelftrainingTable";

const DashboardSelftraining = () => {
    const currentDate = new Date().toISOString().slice(0, 10)
    const [selftrainingDate, setSelftrainingDate] = useState(currentDate);
    const [selftrainings, setSelftrainings] = useState([])

    const updateSelftrainings = () => {
        SelftrainingService.getSelftrainingsByDate(selftrainingDate).then((res) => {
            const response = res.data
            setSelftrainings(response.data)
        })
    }

    useEffect(() => {
        updateSelftrainings()
    }, [selftrainingDate])

    return (
        <>
            <div className="flex justify-center pt-4">
                <h1 className="text-4xl bold leading-none tracking-tight text-gray-900">
                    Самоподготовка
                </h1>
            </div>
            <div className="flex flex-row w-full items-center py-4">
                <div className="basis-1/3">
                    <Calendar compact bordered onChange={value => setSelftrainingDate(value.toISOString().slice(0, 10))} />
                </div>
                <div className="basis-2/3 ml-4 flex justify-center">
                    {selftrainings.length ? (
                        <DashboardSelftrainingTable
                            selftrainings={selftrainings}
                            updateSelftrainings={updateSelftrainings}
                        />
                    ) : (
                        <h3>Никто не записался на эту дату!</h3>
                    )}
                </div>
            </div>
        </>

    );
};

export default DashboardSelftraining;