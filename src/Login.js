import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';

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
          <div>
		  <h1>Welcome to The Notes</h1>
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
                />
                <br/>
                <TextField
                    label="Password"
                    placeholder="winstonneverdie"
                    type="password"
                    required
                    value={this.state.password}
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
                    value={this.state.username}
                />
                <br/>
                <TextField
                    label="Password"
                    type="password"
                    required
                    value={this.state.password}
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