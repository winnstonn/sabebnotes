import React from 'react';
import './assets/css/homepage.css';
import TextField from '@material-ui/core/TextField';
import PrimarySearchAppBar from './Navbar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		marginLeft: 25
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 350,
	},
});

class Homepage extends React.Component {

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
                if (response.data === true){
                    this.props.history.push('/homepage');
                }
                else {
                    return this.setState({error: 'Sorry, there is an error'});
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
			<div className="homepage">
			<PrimarySearchAppBar />
			<br/>
			<Card style={{
				width:"fit-content",
				opacity: 0.8,
				margin:'auto'
			}}>
				<div style={{
                    float: "left",
					marginTop: "15px",
                    width: "fit-content"
                }}>
				<h2>Note</h2>
				<form id="notef" 
				className={classes.container}>
					<TextField
					  id="standard-uncontrolledd"
					  label="Title Note"
					  className={classes.textField}
					  margin="normal"
					  value={this.state.title}
					  onChange={this.handleTitleChange.bind(this)}
					/>
					<TextField
					  id="standard-uncontrolled"
					  label="Insert your note"
					  className={classes.textField}
					  margin="normal"
					  value={this.state.note}
					  onChange={this.handleNoteChange.bind(this)}
					/>
				<br/>
				<br/>
				<Button 
				type="submit" 
				form="notef" 
				children="Insert" 
				style={{
					backgroundColor: "#378bad",
					margin: "25px"
				}} onclick={this.handleInputNote.bind(this)} />
				</form>
				</div>
			</Card>
			</div>
		)
	}
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Homepage);