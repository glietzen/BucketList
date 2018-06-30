import React from "react";
import { Modal, Button } from 'react-materialize';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import {logoutUser} from './../../actions/authActions';
import FormCustom from '../CustomForm/FormCustom';

class ModalForm extends Component {
    render() {

        const {user} = this.props.auth;

        return (
            <Modal
                header='Modal Header'
                trigger={<Button>Add</Button>}>
                <FormCustom />
                <p>{user.name}</p>
                <p>{user.id}</p>

            </Modal>
        )
    }

}


ModalForm.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps, {logoutUser})(ModalForm);