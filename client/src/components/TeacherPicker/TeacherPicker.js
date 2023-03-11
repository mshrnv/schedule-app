import React from 'react';
import { SelectPicker } from 'rsuite';

const TeacherPicker = ({teacher, teachers, teacherHandle}) => {

    const data = teachers.map(
        item => ({ label: item, value: item })
    );

    return (
        <div className="inline-block">
            <SelectPicker defaultValue={teacher} onChange={teacherHandle} data={data} placeholder="-" style={{ width: 224, marginLeft: 8, color: "black"}} />
        </div>
    );
};

export default TeacherPicker;