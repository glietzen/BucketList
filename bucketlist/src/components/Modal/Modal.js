import React from "react";
import {Modal, Button} from 'react-materialize';

const ModalForm = () => (
    <Modal
        header='Modal Header'
        trigger={<Button>Add</Button>}>
        <p>Form for API.</p>
    </Modal>
)

export default ModalForm;