import React from 'react';
import {Button, Icon} from 'react-materialize';
import './DeleteBtn.css';

const DeleteBtn = props => (
    <Button {...props} className='DeleteBtn' waves='light'><Icon center>delete</Icon></Button>
);

export default DeleteBtn