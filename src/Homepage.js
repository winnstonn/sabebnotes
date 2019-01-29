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
			note:'', idNote:0, error:''
		};
	}

	handleInputNote(event) {
		event.preventDefault();
		const apiUrl = 'localhost:8000/api/note';

		if (!this.state.note) {
		  return this.setState({ error: 'A note is required' });
		}

		axios.post(apiUrl, this.state.username, this.state.note, this.state.idNote).then(
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
	
	handleDeleteNote(event) {
		const url = 'localhost:8000/deleteNote';
		// masih belum kelar
		axios.delete(url, this.state.username, this.state.idNote).then(
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

	render() {
		const { classes } = this.props;
		return (
			<div className="homepage">
			<br/><br/>
			<PrimarySearchAppBar />
			<h2 id="homep">This is Your Homepage</h2>
			<Card style={{
				width:"fit-content",
				opacity: 0.8,
				marginTop: '5vh',
				marginLeft:'10vh'
			}}>
				<div style={{
                    float: "left",
					marginTop: "15px",
                    width: "fit-content"
                }}>
				<h2>Note</h2>
				<form onSubmit= {this.handleInputNote.bind(this)} id="notef" 
				className={classes.container} noValidate autoComplete="off">
					<TextField
					  id="standard-uncontrolled"
					  label="Insert your note"
					  className={classes.textField}
					  margin="normal"
					  value={this.state.name}
					  onChange={this.handleNoteChange.bind(this)}
					/>
				<br/>
				<br/>
				<Button 
				type="submit" 
				form="notef" 
				children="Insert" 
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

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Homepage);