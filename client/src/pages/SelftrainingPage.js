import React, {useContext, useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import SelftrainingService from "../api/SelftrainingService";
import {toast, ToastContainer} from "react-toastify";
import SelftrainingTable from "../components/SelftrainingTable/SelftrainingTable";
import SelftrainingFilter from "../components/SelftrainingFilter/SelftrainingFilter";
import {AuthContext} from "../context";

const SelftrainingPage = () => {

    const [datetime, setDatetime] = useState({
        hours: null,
        minutes: null,
        date: null
    })

    const {authData} = useContext(AuthContext)
    const [selftrainings, setSelftrainings] = useState([])

    const newSelftraining = async () => {
        const res = await SelftrainingService.newSelftraining({
            hours: datetime.hours,
            minutes: datetime.minutes,
            date: datetime.date,
            username: authData.username
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
        const res = await SelftrainingService.getUserSelftrainings(authData.username)
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