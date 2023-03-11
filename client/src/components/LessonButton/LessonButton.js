import React, {useState} from 'react';
import {Modal, ButtonToolbar} from 'rsuite';
import {toast} from "react-toastify";
import LessonService from "../../api/LessonService";
import TeacherPicker from "../TeacherPicker/TeacherPicker";

const LessonButton = ({pairInfo, teachers, updateLessons}) => {

    const [open, setOpen] = useState(false);
    const [newPairInfo, setNewPairInfo] = useState(pairInfo)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const groupHandle = (event) => {
        let tempPairInfo = {...newPairInfo}
        tempPairInfo.group = event.target.value
        setNewPairInfo(tempPairInfo)
    }

    const teacherHandle = (value) => {
        let tempPairInfo = {...newPairInfo}
        tempPairInfo.teacher = value
        setNewPairInfo(tempPairInfo)
    }

    const subjectHandle = (event) => {
        let tempPairInfo = {...newPairInfo}
        tempPairInfo.subject = event.target.value
        setNewPairInfo(tempPairInfo)
    }

    const editLesson = () => {
        LessonService.editLesson(pairInfo, newPairInfo).then(res => {
            const response = res.data

            if (response.isError) {
                toast.error(response.message)
            } else {
                toast.success(response.message)
                updateLessons()
            }
        })
    }

    const deleteLesson = () => {
        LessonService.deleteLesson(pairInfo).then(res => {
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
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2 text-center w-full h-full"
                    onClick={handleOpen}>
                    {pairInfo.teacher}
                    <br/>
                    <b>{pairInfo.group}</b>
                    <br/>
                    {pairInfo.subject}
                </button>
            </ButtonToolbar>

            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <h3>Пара №{pairInfo.lesson_number}</h3>
                </Modal.Header>
                <hr/>
                <Modal.Body className="text-gray-800">
                    <h5>Дата: {pairInfo.date.slice(0, 10)}</h5>
                    <h5 className="mt-2">Аудитория: {pairInfo.classroom} УНЦ</h5>
                    <div className="flex items-center mt-2">
                        <h5>Группа:</h5>
                        <input defaultValue={pairInfo.group}
                               type="text"
                               onChange={groupHandle}
                               className="p-2 text-sm text-blue-600 ml-2  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-1/2"/>
                    </div>
                    <div className="flex items-center mt-2">
                        <h5 className="inline-block">Преподаватель:</h5>
                        <TeacherPicker teacher={pairInfo.teacher} teachers={teachers} teacherHandle={teacherHandle}/>
                    </div>
                    <div className="flex items-center mt-2">
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
                                editLesson()
                                handleClose()
                            }}
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Изменить
                    </button>
                    <button type="button"
                            onClick={() => {
                                deleteLesson()
                                handleClose()
                            }}
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Удалить
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default LessonButton;