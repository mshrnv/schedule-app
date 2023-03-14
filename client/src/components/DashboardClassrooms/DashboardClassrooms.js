import React, {useEffect, useState} from 'react';
import ClassroomService from "../../api/ClassroomService";
import DashboardClassroomsTable from "../DashboardClassroomsTable/DashboardClassroomsTable";
import AddClassroom from "../AddClassroom/AddClassroom";
import {toast} from "react-toastify";

const DashboardClassrooms = () => {
    const [classrooms, setClassrooms] = useState([])

    const updateClassrooms = async () => {
        const res = await ClassroomService.getAllClassrooms()
        const response = res.data

        if (response.isError) {
            toast.error(response.message)
        } else {
            setClassrooms(response.data)
        }
    }

    useEffect(() => {
        updateClassrooms()
    }, [])

    return (
        <div className="w-3/4 text-center">
            <h1 className="text-4xl bold leading-none tracking-tight text-gray-900 mb-4">
                Аудитории
            </h1>
            <hr/>
            <AddClassroom
                updateClassrooms={updateClassrooms}
            />
            <hr/>
            <DashboardClassroomsTable
                classrooms={classrooms}
                updateClassrooms={updateClassrooms}
            />
        </div>
    );
};

export default DashboardClassrooms;