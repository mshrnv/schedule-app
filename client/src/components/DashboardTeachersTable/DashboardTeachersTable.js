import React from 'react';
import DeleteTeacherButton from "../DeleteTeacherButton/DeleteTeacherButton";

const DashboardTeachersTable = ({teachers, updateTeachers}) => {
    return (
        <div>
            <div className="w-full mx-auto shadow-md sm:rounded-lg h-200 overflow-y-scroll">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                <p className="mx-auto">ФИО</p>
                            </th>
                            <th scope="col" className="px-6 py-3">

                            </th>
                        </tr>
                        </thead>
                    <tbody>
                    {teachers.map(item => (
                        <tr key={item._id}
                            className="bg-white border-b text-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 text-center text-md font-bold">
                                {item.fio}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <DeleteTeacherButton
                                    teacher={item}
                                    updateTeachers={updateTeachers}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardTeachersTable;