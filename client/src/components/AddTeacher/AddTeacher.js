import React, {useState} from 'react';
import {Input, InputGroup} from "rsuite";
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import TeacherService from "../../api/TeacherService";

const AddTeacher = ({updateTeachers}) => {

    const [teacherFio, setTeacherFio] = useState("");
    const addTeacher = async () => {
        const response = await TeacherService.addTeacher({fio: teacherFio})
        console.log(response)
        await updateTeachers()
        setTeacherFio("")
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <InputGroup inside>
                <InputGroup.Addon>
                    <AvatarIcon />
                </InputGroup.Addon>
                <Input value={teacherFio} onChange={(value) => {setTeacherFio(value)}}/>
            </InputGroup>
            <button onClick={addTeacher} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">
                Добавить
            </button>
        </div>
    );
};

export default AddTeacher;