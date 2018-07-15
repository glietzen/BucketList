import React from 'react';
import {Button, Icon} from 'react-materialize';
import './CompleteBtn.css';

const CompleteBtn = props => (
    <Button {...props} className='CompleteBtn' waves='light'>Complete<Icon left>assignment_turned_in</Icon></Button>
);

export default CompleteBtn