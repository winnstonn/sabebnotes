import Login from './Login';
import Homepage from './Homepage';
import Signup from './Signup';
import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Link, Router, Location } from '@reach/router';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  butto: {
    marginRight: 20
  }
});

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

class Routing extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<nav>
					<Link to="/login">Login</Link>
					<div className={classes.butto}>
						<Link to="/homepage">Homepage</Link>
					</div>
				</nav>
				<PosedRouter>
					<Homepage path="/homepage" />
					<Login path="/login" />
					<Signup path="/signup" />
				</PosedRouter>
			</div>
		)
	}
}

export default withStyles(styles)(Routing);