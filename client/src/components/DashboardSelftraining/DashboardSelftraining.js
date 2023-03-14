import React, {useEffect, useState} from 'react';
import {Calendar} from "rsuite";
import SelftrainingService from "../../api/SelftrainingService";
import DashboardSelftrainingTable from "../DashboardSelftrainingTable/DashboardSelftrainingTable";

const DashboardSelftraining = () => {
    // TODO: Current date
    const [selftrainingDate, setSelftrainingDate] = useState(new Date().toISOString().slice(0, 10));
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
        <div className="flex flex-row w-full items-center py-4">
            <div className="basis-1/3">
                <Calendar compact bordered onChange={value => setSelftrainingDate(value.toISOString().slice(0, 10))} />
            </div>
            <div className="basis-2/3 ml-4">
                <DashboardSelftrainingTable
                    selftrainings={selftrainings}
                    updateSelftrainings={updateSelftrainings}
                />
            </div>
        </div>
    );
};

export default DashboardSelftraining;