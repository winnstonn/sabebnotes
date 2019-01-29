import React from 'react';
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import axios from 'axios';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error:'', firstname:'', lastname:'',
			email:''
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
        axios.post(apiUrl, {username: this.state.username, password: this.state.password}).then(
            response => {
                console.log(response.data);
                if (response.data.authorized === true){
                    return <Redirect from='/' to='/homepage'/>
                }
                else {
                    return this.setState({error: 'wrong username or password'});
                }
            }
        );
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
                
                }}>
                <div style={{
                    float: "left",
                    width: "fit-content"
                }}>
                <h2>Login</h2>
                <form onSubmit= {this.handleSubmit.bind(this)} id="login-form">
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
                type="submit" 
                form="login-form" 
                children="Login" 
                style={{
                    backgroundColor: "#41f4c1",
                    margin: "25px"

                }} />
                </form>
                </div>

                <div style={{
                    float: "left",
                    width: "fit-content",
                    position: "relative",
                    marginTop: "40%",
                    marginLeft: "25px",
                    marginRight: "25px"
                }}>
                    <strong>or</strong>
                </div>
                <div style={{
                    float: "left",
                    marginLeft: "25px",
                    marginRight: "25px",
                    width: "fit-content"
                }}>
                <h2>Sign up</h2>
                <form onSubmit= {this.handleSubmit.bind(this)} id="signup-form">
                <TextField
                    label="First name"
                    required
                    value={this.state.firstname}
                />
                <br/>
                <TextField
                    label="Last name"
                    required
                    value={this.state.lastname}
                />
                <br/>
                <TextField
                    label="Email"
					placeholder="sayakamu@gmail.com"
                    required
                    value={this.state.email}
                />
                <br/>
                <TextField
                    label="Username"
                    required
                />
                <br/>
                <TextField
                    label="Password"
                    type="password"
                    required
                />
                <br/>
                <Button 
                type="submit" 
                form="signup-form" 
                children="Sign up" 
                style={{
                    backgroundColor: "#41f4c1",
                    margin: "25px"

                }} />
                </form>
                </div>
            </Card>
            </div>
            
        )
    }
}