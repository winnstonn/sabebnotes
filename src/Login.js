import React from 'react';
import Button from '@material-ui/core/Button';
import './assets/css/login.css';
import PrimarySearchAppBar from './Navbar';
import axios from 'axios';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
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

		// Buat nyoba redirect tapi masih gabs
		axios.post(/**/).then(() => this.setState({ redirect: true }));

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
		// Buat redirect
		//if (this.state.redirect) {
			//return <Redirect to='./Homepage'/>;
		//}

        return (
            <div className="Login">
				<PrimarySearchAppBar/>
                <form onSubmit= {this.handleSubmit.bind(this)} id="login-form">
                <h3>{this.state.error}</h3>

                <label>Username</label>
                <input type="text" onChange={this.handleUserChange.bind(this)} />

                <label>Password</label>
                <input type="password" onChange={this.handlePassChange.bind(this)} />
                <Button type="submit" form="login-form" children="Sign in" color="#ffffff"/>
                </form>
            </div>
        )
    }
}