import React from "react";
import { CheckPicker, Checkbox, Button } from 'rsuite';

const footerStyles = {
    padding: '10px 2px',
    borderTop: '1px solid #e5e5e5'
};

const footerButtonStyle = {
    float: 'right',
    marginRight: 10,
    marginTop: 2
};

const ClassroomCheckbox = ({allClassrooms, classrooms, setClassrooms}) => {

    const data = allClassrooms.map(
        item => ({ label: item, value: item })
    );

    const allValue = allClassrooms

    const picker = React.useRef();

    const handleChange = value => {
        setClassrooms(value);
    };

    const handleCheckAll = (value, checked) => {
        setClassrooms(checked ? allValue : []);
    };

    return (
        <div>
            <CheckPicker
                data={data}
                placeholder="Аудитории"
                ref={picker}
                style={{ width: 224 }}
                value={classrooms}
                size={"lg"}
                onChange={handleChange}
                renderExtraFooter={() => (
                    <div style={footerStyles}>
                        <Checkbox
                            indeterminate={classrooms.length > 0 && classrooms.length < allValue.length}
                            checked={classrooms.length === allValue.length}
                            onChange={handleCheckAll}
                        >
                            Выбрать все
                        </Checkbox>

                        <Button
                            style={footerButtonStyle}
                            appearance="primary"
                            size="sm"
                            onClick={() => {
                                picker.current.close();
                            }}
                        >
                            Ok
                        </Button>
                    </div>
                )}
            />
        </div>
    );
};

export default ClassroomCheckbox