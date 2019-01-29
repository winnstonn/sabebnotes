import React from 'react';
import Login from './Login';
import { withRouter } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
		<div>
			<Login />
		</div>
		);
	}
}

export default withRouter(App);