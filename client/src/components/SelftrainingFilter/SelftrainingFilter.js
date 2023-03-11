import React from 'react';
import {DatePicker} from "rsuite";

const SelftrainingFilter = ({datetime, setDatetime, newSelftraining}) => {

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

    return (
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
    );
};

export default SelftrainingFilter;