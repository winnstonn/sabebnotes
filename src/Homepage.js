import React from 'react';
import './assets/css/homepage.css';
import TextField from '@material-ui/core/TextField';
import PrimarySearchAppBar from './Navbar';

export default class Homepage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			note:''
		};
	}

	handleInputNote(evennt) {
		this.setState({
			note: evennt.target.value,
		});
	}

	render() {
		return (
			<div className="homepage">
			<br/><br/>
			<PrimarySearchAppBar />
			<h3 id="homep">This is Your Homepage</h3>
				<TextField
					label="Input note"
					placeholder="This is some things about my note"
					required
					value={this.state.note}
				/>
			</div>
		)
	}
}