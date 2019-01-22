import React from 'react';
import './assets/css/homepage.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default class Homepage extends React.Component {
	render() {
		return (
			<div className="homepage">
				<AppBar position="static">
					<Toolbar>
						<Typography variant="title" color="inherit">
						React & Material-UI Sample Application
						</Typography>
					</Toolbar>
				</AppBar>
				<h3 id="homep">This is Your Homepage</h3>
			</div>
		)
	}
}