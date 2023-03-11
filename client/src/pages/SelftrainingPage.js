import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import {DatePicker} from "rsuite";
import SelftrainingService from "../api/SelftrainingService";
import {toast, ToastContainer} from "react-toastify";

const SelftrainingPage = () => {

    const [datetime, setDatetime] = useState({
        hours: null,
        minutes: null,
        date: null
    })

    const [selftrainings, setSelftrainings] = useState([])

    const handleTime = (time) => {
        let newHours = null
        let newMinutes = null

        try {
            newHours = time.getHours()
            newMinutes = time.getMinutes()
        } catch (e) {
            console.log(e)
        }

        setDatetime({
            hours: newHours,
            minutes: newMinutes,
            date: datetime.date
        })
    }

    const handleDate = (date) => {
        let newDate = null

        try {
            newDate = date.toISOString().slice(0, 10)
        } catch (e) {
            console.log(e)
        }

        setDatetime({
            hours: datetime.hours,
            minutes: datetime.minutes,
            date: newDate
        })
    }

    const cleanTime = (event) => {
        console.log(event)
        setDatetime({
            hours: null,
            minutes: null,
            date: datetime.date
        })
    }

    const cleanDate = () => {
        setDatetime({
            hours: datetime.hours,
            minutes: datetime.minutes,
            date: null
        })
    }

    const newSelftraining = () => {
        SelftrainingService.newSelftraining({
            hours: datetime.hours,
            minutes: datetime.minutes,
            date: datetime.date,
            username: "20350125" // TODO: USERNAME HERE
        }).then((res) => {
            toast.success(res.data.message)
        }).catch((res) => {
            toast.error(res.response.data.message)
        })
        updateSelftrainings()
    }

    const updateSelftrainings = () => {
        SelftrainingService.getUserSelftrainings("20350125").then((res) => {
            const response = res.data
            setSelftrainings(response.data)
        }).catch((res) => {
            toast.error(res.response.data.message)
        })
    }

    useEffect(() => {
        updateSelftrainings()
    }, [])

    return (
        <div>
            <Header/>
            <div className="flex flex-col items-center justify-center">
                <DatePicker
                    size="lg"
                    placeholder="Выберите дату"
                    disabledDate={date => [0, 5, 6].includes(date.getDay())}
                    onChange={handleDate}
                    onClean={cleanDate}
                    style={{width: 320, marginTop: 32, marginBottom: 8}}
                />
                <DatePicker
                    format="HH:mm"
                    size="lg"
                    placeholder="Выберите время"
                    ranges={[]}
                    hideHours={hour => hour < 8 || hour > 20}
                    hideMinutes={minute => minute % 10 !== 0}
                    onChange={handleTime}
                    onClean={cleanTime}
                    style={{width: 320, marginTop: 8, marginBottom: 8}}
                />
                <button type="button"
                        onClick={newSelftraining}
                        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 text-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mt-4 mr-2 mb-2">Записаться
                </button>
            </div>
            <hr className="mx-auto w-2/3"/>
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
                        <tr className="bg-white border-b text-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 text-center">
                                08.03.2023
                            </td>
                            <td className="px-6 py-4 text-center">
                                16:30
                            </td>
                            <td className="px-6 py-4 text-center">
                                6
                            </td>
                            <td className="px-6 py-4 text-center">
                                <span
                                    className="inline-flex items-center bg-green-100 text-green-800 text-md font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                    <span className="w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
                                    Состоится
                                </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm  text-center p-2">
                                    Отменить запись
                                </button>
                            </td>
                        </tr>                        <tr className="bg-white border-b text-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 text-center">
                                09.03.2023
                            </td>
                            <td className="px-6 py-4 text-center">
                                17:30
                            </td>
                            <td className="px-6 py-4 text-center">
                                3
                            </td>
                            <td className="px-6 py-4 text-center">
                                <span
                                    className="inline-flex items-center bg-red-100 text-red-800 text-md font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                    <span className="w-2 h-2 mr-2 bg-red-500 rounded-full"></span>
                                    Не состоится
                                </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm  text-center p-2">
                                    Отменить запись
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <ToastContainer/>
        </div>
    );
};

export default SelftrainingPage;