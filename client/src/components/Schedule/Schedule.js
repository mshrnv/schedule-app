import React, {useEffect, useState} from 'react';
import LessonService from "../../api/LessonService";
import EmptyLessonButton from "../EmptyLessonButton/EmptyLessonButton";
import LessonButton from "../LessonButton/LessonButton";
import {toast} from "react-toastify";

const Schedule = ({date, teachers, classrooms, update}) => {

    const [lessons, setLessons] = useState([])

    const updateLessons = async () => {
        const res = await LessonService.getLessonsByDate(date)
        const response = res.data

        if (response.isError) {
            toast.error(response.message)
        } else {
            setLessons(response.data)
        }

    }

    const getLessonButton = (pairInfo, classroom, lesson_number, date) => {
        if (!pairInfo) {
            return (
                <EmptyLessonButton
                    lesson_number={lesson_number}
                    classroom={classroom}
                    date={date}
                    teachers={teachers}
                    updateLessons={updateLessons}
                />
            )
        }

        return (
            <LessonButton
                pairInfo={pairInfo}
                teachers={teachers}
                updateLessons={updateLessons}
            />
        )
    }

    useEffect(() => {
        updateLessons()
    }, [update])

    return (
        <div className="flex flex-col w-3/4 mx-auto">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-lg border-2 border-indigo-600">
                        <table className="min-w-full text-center">
                            <thead className="border-b border-indigo-500 text-gray-900">
                            <tr>
                                <th scope="col" className="text-xl font-bold px-6 py-4 border-r border-indigo-500">
                                    {date}
                                </th>
                                {classrooms.map(classroom => (
                                    <th key={classroom} scope="col" className="text-xl font-bold px-6 py-4 border-r border-indigo-500">
                                        {classroom} УНЦ
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>

                            {[1,2,3,4].map((lessonNumber => (
                                <tr key={String(date)+String(lessonNumber)} className="border-b border-indigo-500">
                                    <td className="px-6 py-4 whitespace-nowrap text-xl font-bold text-gray-900 border-r border-indigo-500">{lessonNumber}</td>

                                    {classrooms.map(classroom => (
                                        <td key={String(lessonNumber)+String(classroom)} className="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r border-indigo-500">
                                            {getLessonButton(lessons.find(o => (o.classroom === classroom && o.lesson_number === lessonNumber)), classroom, lessonNumber, date)}
                                        </td>
                                    ))}
                                </tr>
                            )))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;