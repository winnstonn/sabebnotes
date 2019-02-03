import React from 'react';
import './assets/css/homepage.css';
import TextField from '@material-ui/core/TextField';
import PrimarySearchAppBar from './Navbar';
import { Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import CardHeader from '@material-ui/core/CardHeader';

const styles = {
  card: {
    width: 275, marginLeft: 60, height:260
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

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
                if (response.respon === 'Good'){
					console.log("note inserted")
                    return <Homepage />;
                }
                else {
                    return this.setState({error: 'There is an error please try again'});
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
		const bull = <span className={classes.bullet}>•</span>;

		return (
			<div>
			<PrimarySearchAppBar />
			<br/>
			<div
			  style= {{
				  backgroundColor: '#e55b5b',
				  borderRadius: '5px',
				  width: 'fit-content',
				  margin: 'auto'

			  }}
			  >
				<h2> { this.state.error } </h2>
			  </div>
			<Card style={{
					width:560,
					opacity: 0.8,
                    marginTop:100, marginLeft:360, marginBottom:75,
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
					<br/><br/>
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
					<br/><br/>
				</Card>
				<Card className={classes.card}>
				<CardHeader subheader="Tanggal Dibuat"/>
				  <CardContent>
					<Typography variant="h5" component="h2">
					Title Note
					</Typography>
					<br/>
					<Typography component="p">
					  This is the note part
					</Typography>
				  </CardContent>
				  <br/>
				</Card>
				<br/><br/>
			</div>
		)
	}
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Homepage);