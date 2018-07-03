import React from "react";
import Nav from "../NavBar/NavBar";
import Cardlist from "../Cardlist/Cardlist"
import {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import Axios from "axios";
import {logoutUser} from './../../actions/authActions';


class Home extends Component {

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/home')
        }
    }

    render() {

        let itemsArrary = [];

        let getUserList = (userID) => {

            console.log(userID)
            Axios.get(`/api/getUserInfo/${userID}`)
                .then((res) => {
                    itemsArrary = res.data.list[0].items;
                    console.log(itemsArrary)
                });        
        }

        const {isAuthenticated, user} = this.props.auth;

        const authContent = (
            <div className="container">
                <Cardlist />
                <Cardlist />
                <Cardlist />
                {getUserList(user.id)}
            </div>
        )

        const guestContent = (
            <div className="container">
                <p>You must be logged in to see your bucket list!</p>
            </div>
        )

        return (
            <div>
                <Nav />
                {isAuthenticated ? authContent : guestContent}
            </div>
        )
    }
}

Home.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(Home);