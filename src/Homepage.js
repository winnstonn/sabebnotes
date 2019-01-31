import React from 'react';
import './assets/css/homepage.css';
import TextField from '@material-ui/core/TextField';
import PrimarySearchAppBar from './Navbar';
import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class Homepage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			note:'', idNote:0, error:'',title:''
		};
	}

	handleInputNote(event) {
		event.preventDefault();
		const apiUrl = 'localhost:8000/api/insertNote';

		if (!this.state.note) {
		  return this.setState({ error: 'A note is required' });
		}
		const input = { username: this.state.username, note:this.state.note, id:this.state.idNote, title:this.state.title};

 		axios.post(apiUrl,input).then(
            response => {
				console.log(response);
                if (response.response === 'Nice insert'){
                    return <Homepage />;
                }
                else {
                    return this.setState({error: response.response});
                }
            }
        );
	}

	handleNoteChange(event) {
        this.setState({
          note: event.target.value,
        });
      }
	handleTitleChange(event) {
        this.setState({
          title: event.target.value,
        });
      }

	render() {
		const { classes } = this.props;
		return (
			<div>
			<PrimarySearchAppBar />
			<br/>
			<Card style={{
					width:560,
					opacity: 0.8,
                    margin:"auto",
                    padding: '35px'
					
					}}>
					<div style={{
                        margin: "auto"
					}}>
					<h2>Insert Note</h2>
					<form  id="signup-form">
					<TextField
						label="Note Title"
						value={this.state.title}
						onChange={this.handleTitleChange.bind(this)}
						style = {{ marginRight:30, width: 250}}
					/>
					<TextField
						label="Note"
						placeholder="Insert your note here"
						value={this.state.note}
						onChange={this.handleNoteChange.bind(this)}
						style = {{ width: 250}}
					/>
					<br/>
					<Button 
					form="signup-form" 
					children="Insert" 
					style={{
						backgroundColor: "#378bad",
                        margin: "18px",
                        color: "white"

					}} onClick= {this.handleInputNote.bind(this)}/>
					</form>
					</div>
				</Card>
			</div>
		)
	}
}