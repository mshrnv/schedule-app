import React from 'react';
import { Modal } from 'rsuite';
import SelftrainingService from "../../api/SelftrainingService";
import {toast} from "react-toastify";

const DeleteSelftrainingButton = ({selftraining, updateSelftrainings}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteSelftraining = async () => {
        const res = await SelftrainingService.deleteSelftraining({_id: selftraining._id})
        const response = res.data

        if (response.isError) {
            toast.error(response.message)
        } else {
            toast.success(response.message)
        }

        await updateSelftrainings()
        handleClose()
    }

    return (
        <>
            <button type="button"
                    onClick={handleOpen}
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm  text-center p-2">
                Отменить запись
            </button>


            <Modal open={open} onClose={handleClose} style={{padding: 0}}>
                <Modal.Body>
                    <h6>Вы уверены, что хотите удалить запись на {new Date(selftraining.date).toJSON().slice(0, 10).split('-').reverse().join('.')} в {selftraining.hours}:{selftraining.minutes} ?</h6>
                </Modal.Body>
                <Modal.Footer>

                    <button onClick={deleteSelftraining} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Удалить
                    </button>
                    <button onClick={handleClose} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Отмена
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteSelftrainingButton;