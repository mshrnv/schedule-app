import React from 'react';

const SelftrainingTable = ({selftrainings}) => {
    return (
        <div>
            <div className="w-2/3 mx-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                        className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            <p className="mx-auto">Дата</p>
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            <p className="mx-auto">Время</p>
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            <p className="mx-auto">Записей</p>
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            <p className="mx-auto">Статус</p>
                        </th>
                        <th scope="col" className="px-6 py-3">

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {selftrainings.map(item => (
                        <tr key={item._id}
                            className="bg-white border-b text-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 text-center">
                                {new Date(item.date).toJSON().slice(0, 10).split('-').reverse().join('.')}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {item.hours}:{item.minutes}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {item.todayCount}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {item.todayCount >= 5 ? (
                                    <span
                                        className="inline-flex items-center bg-green-100 text-green-800 text-md font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                            <span className="w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
                                            Состоится
                                        </span>
                                ) : (
                                    <span
                                        className="inline-flex items-center bg-red-100 text-red-800 text-md font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                            <span className="w-2 h-2 mr-2 bg-red-500 rounded-full"></span>
                                            Не состоится
                                        </span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm  text-center p-2">
                                    Отменить запись
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelftrainingTable;