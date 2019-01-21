import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.username) {
          return this.setState({ error: 'Username is required' });
        }
    
        if (!this.state.password) {
          return this.setState({ error: 'Password is required' });
        }
    
        return this.setState({ error: '' });
    }

    handleUserChange(evt) {
        this.setState({
          username: evt.target.value,
        });
      }
    
    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit= {this.handleSubmit.bind(this)} id="login-form">
                <h3>{this.state.error}</h3>

                <label>Username</label>
                <input type="text" onChange={this.handleUserChange.bind(this)} />

                <label>Password</label>
                <input type="password" onChange={this.handlePassChange.bind(this)} />
                <button type="submit" form="login-form">Sign in</button>
                </form>
            </div>
        )
    }
}