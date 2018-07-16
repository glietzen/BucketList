import React from "react";
import { Modal, Button, Icon } from 'react-materialize';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import {logoutUser} from './../../actions/authActions';
import ApiForm from '../ApiForm/ApiForm';

class ModalAPI extends Component {
    render() {
        return (
            <Modal  
                header='Search for A Bucket List Item'
                trigger={<Button><Icon className='addIcon' medium>search</Icon></Button>}>
                <ApiForm 
                    searchPlace={this.props.searchPlace}
                    result={this.props.result}
                />
            </Modal>
        )
    }
}

ModalAPI.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps, {logoutUser})(ModalAPI);