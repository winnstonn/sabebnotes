import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

class App extends React.Component {
   render() {
      return (
			<Login/>
		)
   }
}

class Home extends React.Component {
	render() {
		return (
			<p>Home</p>
		);
	}
}

export default App;