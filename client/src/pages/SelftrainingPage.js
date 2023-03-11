import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import SelftrainingService from "../api/SelftrainingService";
import {toast, ToastContainer} from "react-toastify";
import SelftrainingTable from "../components/SelftrainingTable/SelftrainingTable";
import SelftrainingFilter from "../components/SelftrainingFilter/SelftrainingFilter";

const SelftrainingPage = () => {

    const [datetime, setDatetime] = useState({
        hours: null,
        minutes: null,
        date: null
    })

    const [selftrainings, setSelftrainings] = useState([])

    const newSelftraining = () => {
        SelftrainingService.newSelftraining({
            hours: datetime.hours,
            minutes: datetime.minutes,
            date: datetime.date,
            username: "20350125" // TODO: USERNAME HERE
        }).then((res) => {
            toast.success(res.data.message)
        }).catch((res) => {
            toast.error(res.response.data.message)
        })
        updateSelftrainings()
    }

    const updateSelftrainings = () => {
        SelftrainingService.getUserSelftrainings("20350125").then((res) => {
            const response = res.data
            setSelftrainings(response.data)
        }).catch((res) => {
            toast.error(res.response.data.message)
        })
    }

    useEffect(() => {
        updateSelftrainings()
    }, [])

    return (
        <div>
            <Header/>
            <SelftrainingFilter
                datetime={datetime}
                setDatetime={setDatetime}
                newSelftraining={newSelftraining}
            />
            <hr className="mx-auto w-2/3"/>
            <SelftrainingTable
                selftrainings={selftrainings}
            />
            <ToastContainer/>
        </div>
    );
};

export default SelftrainingPage;