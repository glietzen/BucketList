import React from "react";
import {Modal, Button, Icon} from 'react-materialize';
import './Modal.css';

const ModalForm = () => (
    <Modal
        header='Modal Header'
        trigger={<Button><Icon className='addIcon' medium>add</Icon></Button>}>
        <p>Form for API.</p>
    </Modal>
)

export default ModalForm;