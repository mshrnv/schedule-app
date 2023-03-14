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

    const newSelftraining = async () => {
        const res = await SelftrainingService.newSelftraining({
            hours: datetime.hours,
            minutes: datetime.minutes,
            date: datetime.date,
            username: "20350125" // TODO: USERNAME HERE
        })

        const response = res.data
        if (response.isError) {
            toast.error(response.message)
        } else {
            toast.success(response.message)
        }
        await updateSelftrainings()
    }

    const updateSelftrainings = async () => {
        const res = await SelftrainingService.getUserSelftrainings("20350125")
        const response = res.data

        if (response.isError) {
            toast.error(response.message)
        } else {
            setSelftrainings(response.data)
        }
    }

    useEffect (() => {
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
                updateSelftrainings={updateSelftrainings}
            />
            <ToastContainer/>
        </div>
    );
};

export default SelftrainingPage;