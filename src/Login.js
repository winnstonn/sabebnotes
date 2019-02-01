import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import axios from 'axios';
import Homepage from './Homepage';
import Signup from './Signup';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error:'',redir:false, redirTosign:false
        };
    }


    handleSubmit(event) {
        event.preventDefault();
        const apiUrl = 'http://localhost:8000/api/auth_login'

        if (!this.state.username) {
          return this.setState({ error: 'Username is required' });
		}
    
        if (!this.state.password) {
          return this.setState({ error: 'Password is required' });
        }

		const user = {username: this.state.username, password: this.state.password};
		return this.setState({ redir: true });

/*        axios.post(apiUrl, user).then(
            response => {
                if (response.data.authorized === true){
                    return this.setState({ redir: true });
                }
                else {
                    return this.setState({error: 'wrong username or password'});
                }
            }
        );*/
    }

    handleUserChange(evt) {
        this.setState({
          username: evt.target.value,
        });
      }
	handleClick(e) {
		e.preventDefault();
		return this.setState({ redirTosign: true });
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
		else if (this.state.redirTosign) {
			return <Signup/>
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
					<br/>
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
                        href= '/signup' onClick={this.handleClick.bind(this)}
                        >Don't have an account yet? Sign up here</a>
				</Card>
				</div>
				)
		}
    }
}