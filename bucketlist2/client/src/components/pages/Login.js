import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from './../../actions/authActions';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        }

        if(nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(userData);
    }

    render() {
        const {errors} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <h4>Welcome to Bucket List. Login to your account!</h4>
                <div className="container">
                <form onSubmit={this.onSubmit}>
                    {errors.email ? errors.email : null}
                    <input type="text" className="form-control" placeholder="Email" name="email" value={this.state.email}  onChange={this.onChange} />
                    {errors.password ? errors.password : null}
                    <input type="text" className="form-control" placeholder="Password" name="password" value={this.state.password}  onChange={this.onChange} />
                    <input type="submit" className="btn" />
                </form>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(Login);