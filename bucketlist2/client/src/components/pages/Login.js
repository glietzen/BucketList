import React, {Component} from 'react';

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

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(user)

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <h4>Welcome to Bucket List. Login to your account!</h4>
                <div className="container">
                <form onSubmit={this.onSubmit}>
                    <input type="text" className="form-control" placeholder="Email" name="email" value={this.state.email}  onChange={this.onChange} />
                    <input type="text" className="form-control" placeholder="Password" name="password" value={this.state.password}  onChange={this.onChange} />
                    <input type="submit" className="btn" />
                </form>
                </div>
            </div>
        )
    }
}

export default Login;