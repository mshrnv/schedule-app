import React, {useState} from 'react';
import {Input, InputGroup} from "rsuite";
import MemberIcon from '@rsuite/icons/Member';
import ClassroomService from "../../api/ClassroomService";
import {toast} from "react-toastify";

const AddClassroom = ({updateClassrooms}) => {

    const [classroomNum, setClassroomNum] = useState("");
    const addClassroom = async () => {
        const res = await ClassroomService.addClassroom({num: classroomNum})
        const response = res.data

        if (response.isError) {
            toast.error(response.message)
        } else {
            toast.success(response.message)
        }

        await updateClassrooms()
        setClassroomNum("")
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <InputGroup inside>
                <InputGroup.Addon>
                    <MemberIcon />
                </InputGroup.Addon>
                <Input value={classroomNum} onChange={(value) => {setClassroomNum(value)}}/>
            </InputGroup>
            <button onClick={addClassroom} type="" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">
                Добавить
            </button>
        </div>
    );
};

export default AddClassroom;