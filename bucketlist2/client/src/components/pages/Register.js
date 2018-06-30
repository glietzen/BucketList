import React, {Component} from 'react';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
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

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        console.log(newUser);
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <h4>Welcome to Bucket List. Create your account!</h4>
                <div className="container">
                <form onSubmit={this.onSubmit}>
                    <input type="text" className="form-control" placeholder="Name" name="name" value={this.state.name} onChange={this.onChange} />
                    <input type="text" className="form-control" placeholder="Email" name="email" value={this.state.email}  onChange={this.onChange} />
                    <input type="text" className="form-control" placeholder="Password" name="password" value={this.state.password}  onChange={this.onChange} />
                    <input type="text" className="form-control" placeholder="Confirm Password" name="password2" value={this.state.password2}  onChange={this.onChange} />
                    <input type="submit" className="btn" />
                </form>
                </div>
            </div>
        )
    }
}

export default Register;