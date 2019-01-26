import Login from './Login';
import Homepage from './Homepage';
import React from 'react';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

export default class Homepage extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<Link to="/login">Login</Link>
					<Link to="/homepage">Homepage</Link>
				</nav>
				<PosedRouter>
					<Homepage path="/homepage" />
					<Login path="/login" />
				</PosedRouter>
			</div>
	}
}