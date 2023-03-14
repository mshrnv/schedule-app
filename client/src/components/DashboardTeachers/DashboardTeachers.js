import React, {useEffect, useState} from 'react';
import TeacherService from "../../api/TeacherService";
import DashboardTeachersTable from "../DashboardTeachersTable/DashboardTeachersTable";

const DashboardTeachers = () => {

    const [teachers, setTeachers] = useState([])

    const updateTeachers = async () => {
        const response = await TeacherService.getAllTeachers()
        setTeachers(response.data.data)
    }

    useEffect(() => {
        updateTeachers()
    }, [])

    return (
        <div>
            <h1 className="text-4xl bold leading-none tracking-tight text-gray-900 mb-4">
                Преподаватели
            </h1>
            <DashboardTeachersTable
                teachers={teachers}
                updateTeachers={updateTeachers}
            />
        </div>
    );
};

export default DashboardTeachers;