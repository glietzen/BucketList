import React from 'react';
import {Button, Icon} from 'react-materialize';

const DeleteBtn = props => (
    <Button {...props} waves='light'>Delete<Icon left>delete</Icon></Button>
);

export default DeleteBtn