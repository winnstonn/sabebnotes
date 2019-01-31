import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import axios from 'axios';
import Homepage from './Homepage';

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error:'', firstname:'', lastname:'',
			email:'', redir:false
        };
    }


    handleSubmit(event) {
        event.preventDefault();
        const apiUrl = 'http://localhost:8000/api/auth_signup'

        if (!this.state.username) {
          return this.setState({ error: 'Username is required' });
		}
    
        if (!this.state.password) {
          return this.setState({ error: 'Password is required' });
        }

		const user = {username: this.state.username, password: this.state.password};

        axios.post(apiUrl, user).then(
            response => {
                if (response.data.authorized === true){
                    return this.setState({ redir: true });
                }
                else {
                    return this.setState({error: 'wrong username or password'});
                }
            }
        );
    }

    handleFirstNameChange(evt) {
        this.setState({
          firstname: evt.target.value,
        });
    }

    handleLastNameChange(evt) {
        this.setState({
          lastname: evt.target.value,
        });
    }

    handleEmailChange(evt) {
        this.setState({
          email: evt.target.value,
        });
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
		if (this.state.redir) {
			console.log("masuk siiii");
			return <Homepage/>
		}
		else {
			return (
			  <div>
			  <h1>Welcome to The Notes</h1>
			  <div>
				<h2> { this.state.error } </h2>
			  </div>
				<Card style={{
					width:"fit-content",
					margin: 'auto',
					opacity: 0.8,
                    marginTop: '15vh',
                    padding: '20px'
					
					}}>
					<div style={{
                        width: "fit-content",
                        margin: "auto"
					}}>
					<h2>Login</h2>
					<form  id="login-form">
                    	<TextField
						label="First name"
						required
						value={this.state.firstname}
						onChange={this.handleFirstNameChange.bind(this)}
						style={{
							margin: "25px"
						}}
					/>
                    <br/>
                    	<TextField
						label="Last name"
						required
						value={this.state.lastname}
						onChange={this.handleLastNameChange.bind(this)}
						style={{
							margin: "25px"
						}}
					/>
                    <br/>
                    	<TextField
						label="Email"
						placeholder="ilham@example.com"
						type="email"
						required
						value={this.state.email}
						onChange={this.handleEmailChange.bind(this)}
						style={{
							margin: "25px"
						}}
					/>
					<br/>
                    <TextField
						label="Username"
						placeholder="ilhamlovenads"
						required
						value={this.state.username}
						onChange={this.handleUserChange.bind(this)}
					/>
					<br/>
					<TextField
						label="Password"
						placeholder="winstonneverdie"
						type="password"
						required
						value={this.state.password}
						onChange={this.handlePassChange.bind(this)}
						style={{
							margin: "25px"
						}}
					/>
					<Button 
					form="login-form" 
					children="Login" 
					style={{
						backgroundColor: "#378bad",
                        margin: "25px",
                        color: "white"

					}} onClick= {this.handleSubmit.bind(this)}/>
					</form>
					</div>
                    <a style={{
                        fontSize: "10pt",
                        color: "#56ad5b"
                        }}
                        href= '/signup'
                        >Don't have an account yet? Sign up here</a>
				</Card>
				</div>
				)
		}
    }
}