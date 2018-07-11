import React from 'react';
import {Button, Icon} from 'react-materialize';

const CompleteBtn = props => (
    <Button {...props} waves='light'>Complete<Icon left>assignment_turned_in</Icon></Button>
);

export default CompleteBtn