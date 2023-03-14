import React, {useEffect, useState} from 'react';
import TeacherService from "../../api/TeacherService";
import DashboardTeachersTable from "../DashboardTeachersTable/DashboardTeachersTable";
import AddTeacher from "../AddTeacher/AddTeacher";

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
        <div className="w-3/4 text-center">
            <h1 className="text-4xl bold leading-none tracking-tight text-gray-900 mb-4">
                Преподаватели
            </h1>
            <hr/>
            <AddTeacher
                updateTeachers={updateTeachers}
            />
            <hr/>
            <DashboardTeachersTable
                teachers={teachers}
                updateTeachers={updateTeachers}
            />
        </div>
    );
};

export default DashboardTeachers;