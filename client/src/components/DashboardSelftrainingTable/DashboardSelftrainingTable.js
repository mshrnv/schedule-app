import React from 'react';
import DeleteSelftrainingButton from "../DeleteSelftrainingButton/DeleteSelftrainingButton";

const DashboardSelftrainingTable = ({selftrainings, updateSelftrainings}) => {
    return (
        <div>
            <div className="w-full mx-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                        className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            <p className="mx-auto">Пользователь</p>
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            <p className="mx-auto">Дата</p>
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            <p className="mx-auto">Время</p>
                        </th>
                        <th scope="col" className="px-6 py-3">

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {selftrainings.map(item => (
                        <tr key={item._id}
                            className="bg-white border-b text-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 text-center text-md font-bold">
                                {item.username}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {new Date(item.date).toJSON().slice(0, 10).split('-').reverse().join('.')}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {item.hours}:{item.minutes}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <DeleteSelftrainingButton
                                    selftraining={item}
                                    updateSelftrainings={updateSelftrainings}
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

export default DashboardSelftrainingTable;