import React from "react";
import {Modal, Button, Icon} from 'react-materialize';
import './Modal.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import {logoutUser} from './../../actions/authActions';
import FormCustom from '../CustomForm/FormCustom';
import Axios from "axios";

class ModalForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            listId: ''
        }
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit (e) {
        e.preventDefault();
        const itemData = {
            title: this.state.title,
            description: this.state.description,
            listId: this.props.auth.user.list
        }
        Axios.post('api/items', itemData)
            .then(res => console.log(res))
            // ADD PROPS HERE .then()
            .catch(err => console.log(err));
    }


    render() {       


        const {user} = this.props.auth;

        

        return (
            <Modal
                header='Modal Header'
                trigger={<Button><Icon className='addIcon' medium>add</Icon></Button>}>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="title" placeholder="title" onChange={this.onChange} value={this.state.title}/>
                    <input type="text" onChange={this.onChange} name="description" placeholder="description" value={this.state.description}/>
                    <input type="text" name="listId" value={user.list} />
                    <button type="submit">Submit</button>
                </form>
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