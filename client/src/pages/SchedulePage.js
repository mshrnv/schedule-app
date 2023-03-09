import React, {useEffect, useState} from "react";
import 'rsuite/dist/rsuite.min.css';
import {DateRangePicker} from 'rsuite';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import ClassroomCheckbox from "../components/ClassroomCheckbox/ClassroomCheckbox";
import ClassroomService from "../api/ClassroomService";
import Header from "../components/Header/Header";
import Utils from "../utils/Utils";
import TeacherService from "../api/TeacherService";
import Schedule from "../components/Schedule/Schedule";

const SchedulePage = () => {

    const currentDate = new Date().toISOString().slice(0, 10)

    const [dateRange, setDateRange] = useState({
        from: currentDate,
        to: currentDate,
        range: [currentDate]
    })

    const [classrooms, setClassrooms] = useState([]);
    const [allClassrooms, setAllClassrooms] = useState([])
    const [teachers, setTeachers] = useState([])

    const updateAllClassrooms = () => {
        ClassroomService.getAllClassrooms().then((res) => {
            const response = res.data
            const classes = response.data.map(elem => elem.num)
            setAllClassrooms(classes)
            setClassrooms(classes)
        })
    }

    const updateTeachers = () => {
        TeacherService.getAllTeachers().then((res) => {
            const response = res.data
            setTeachers(response.data.map(item => item.fio))
        })
    }

    const handleDateRange = (params) => {
        const [date1, date2] = params.map(item => new Date(item).toISOString().slice(0, 10))

        setDateRange({
            from: date1,
            to: date2,
            range: Utils.dateRange(date1, date2)
        })
    }

    useEffect(() => {
        updateAllClassrooms()
        updateTeachers()
    }, [])

    return (
        <div>
            <Header/>
            <div className="flex justify-center items-center">
                <DateRangePicker
                    placeholder={'Выберите диапозон дат'}
                    onChange={handleDateRange}
                    showOneCalendar
                    size={"lg"}
                    className="w-1/3 mt-8 mb-8 mr-8 text-black inline-block"
                />

                <ClassroomCheckbox
                    allClassrooms={allClassrooms}
                    classrooms={classrooms}
                    setClassrooms={setClassrooms}
                    className="w-1/3 mt-8 mb-8 text-black inline-block"
                />

            </div>
            <div className="flex flex-col justify-center items-center">
                {dateRange.range.map(date => (
                    <Schedule
                        key={date}
                        teachers={teachers}
                        classrooms={classrooms}
                        date={date}
                    />
                ))}
            </div>
            <ToastContainer/>
        </div>
    );
}

export default SchedulePage