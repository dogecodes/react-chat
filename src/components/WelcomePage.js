import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ErrorMessage from './ErrorMessage';

const styles = theme => ({
  paper: {
    // eslint-disable-next-line
    marginTop: theme.spacing.unit * 3 + 64,
    width: 500,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  },
});

class WelcomePage extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    signup: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    recieveAuth: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
  };

  static defaultProps = {
    error: null,
  };

  state = {
    activeTab: 0,
  };

  componentDidMount() {
    this.props.recieveAuth();
  }

  handleTabChage = (event, value) => {
    this.setState({ activeTab: value });
  };

  render() {
    const {
      classes, signup, login, isAuthenticated, error,
    } = this.props;

    const { activeTab } = this.state;

    if (isAuthenticated) {
      return <Redirect to="/chat" />;
    }

    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
              DogeCodes React Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Grid item>
            <Paper className={classes.paper}>
              <AppBar position="static" color="default">
                <Tabs value={activeTab} onChange={this.handleTabChage} fullWidth>
                  <Tab label="Login" />
                  <Tab label="Sign Up" />
                </Tabs>
              </AppBar>
              <div className={classes.tabContent}>
                {activeTab === 0 && <LoginForm onSubmit={login} />}
                {activeTab === 1 && <SignupForm onSubmit={signup} />}
              </div>
            </Paper>
          </Grid>
        </Grid>
        <ErrorMessage error={error} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(WelcomePage);
