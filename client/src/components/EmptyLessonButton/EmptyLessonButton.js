import React, {useState} from 'react';
import {ButtonToolbar, Modal} from "rsuite";
import {toast} from "react-toastify";
import LessonService from "../../api/LessonService";
import TeacherPicker from "../TeacherPicker/TeacherPicker";

const EmptyLessonButton = ({lesson_number, classroom, date, teachers, updateLessons}) => {

    const [pairInfo, setPairInfo] = useState({
        group: "",
        teacher: "",
        date: date,
        lesson_number: lesson_number,
        classroom: classroom,
        subject: ""
    })
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const groupHandle = (event) => {
        let tempPairInfo = {...pairInfo}
        tempPairInfo.group = event.target.value
        setPairInfo(tempPairInfo)
    }

    const teacherHandle = (value) => {
        let tempPairInfo = {...pairInfo}
        tempPairInfo.teacher = value
        setPairInfo(tempPairInfo)
    }

    const subjectHandle = (event) => {
        let tempPairInfo = {...pairInfo}
        tempPairInfo.subject = event.target.value
        setPairInfo(tempPairInfo)
    }

    const newLesson = () => {
        LessonService.newLesson(pairInfo).then(res => {
            const response = res.data

            if (response.isError) {
                toast.error(response.message)
            } else {
                toast.success(response.message)
                updateLessons()
            }
        })
    }

    return (
        <div>
            <ButtonToolbar>
                <button
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-2 text-center w-full h-full"
                    onClick={handleOpen}>Нет пары
                </button>
            </ButtonToolbar>

            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <h3>Пара №{pairInfo.lesson_number}</h3>
                </Modal.Header>
                <hr/>
                <Modal.Body>
                    <h5>Дата: {pairInfo.date.slice(0, 10)}</h5>
                    <h5 className="mt-2">Аудитория: {pairInfo.classroom} УНЦ</h5>
                    <div className="flex mt-2 items-center">
                        <h5>Группа:</h5>
                        <input defaultValue={pairInfo.group}
                               type="text"
                               onChange={groupHandle}
                               className="p-2 text-sm ml-2 text-blue-600 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-1/2"/>
                    </div>
                    <div className="flex mt-2 items-center">
                        <h5>Преподаватель:</h5>
                        <TeacherPicker teachers={teachers} teacherHandle={teacherHandle}/>
                    </div>
                    <div className="flex mt-2 items-center">
                        <h5>Дисциплина:</h5>
                        <input defaultValue={pairInfo.subject}
                               type="text"
                               onChange={subjectHandle}
                               className="p-2 text-sm ml-2 text-blue-600 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-1/2"/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button"
                            onClick={() => {
                                newLesson()
                                handleClose()
                            }}
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Добавить
                        пару
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EmptyLessonButton;