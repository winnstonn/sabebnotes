import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
			<Login/>
		   <Router>
		  <div>
			<ul>
			  <li><Link to="/">Home</Link></li>
			</ul>
			<hr/>

			// All 3 components below would be rendered when in a homepage
			<Route exact path="/" component={Home}/>

		  </div>
		   </Router>
         </div>
      );
   }
}

class Login extends React.Component {
	render() {
		return (
			<h2>This is the login</h2>
		);
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