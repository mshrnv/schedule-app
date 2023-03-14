import React, {useEffect, useState} from 'react';
import ClassroomService from "../../api/ClassroomService";
import DashboardClassroomsTable from "../DashboardClassroomsTable/DashboardClassroomsTable";

const DashboardClassrooms = () => {
    const [classrooms, setClassrooms] = useState([])

    const updateClassrooms = async () => {
        const response = await ClassroomService.getAllClassrooms()
        setClassrooms(response.data.data)
    }

    useEffect(() => {
        updateClassrooms()
    }, [])

    return (
        <div>
            <h1 className="text-4xl bold leading-none tracking-tight text-gray-900 mb-4">
                Аудитории
            </h1>
            <DashboardClassroomsTable
                classrooms={classrooms}
                updateClassrooms={updateClassrooms}
            />
        </div>
    );
};

export default DashboardClassrooms;