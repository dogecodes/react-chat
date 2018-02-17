import React from 'react';
import { withStyles } from 'material-ui';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2,
  }
})

class LoginForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  }

  handleUsernameInputChange = (event) => {
    event.persist();
    this.setState((prevState) => ({
      username: {
        ...prevState.username,
        value: event.target.value,
      },
    }));
  }

  handlePasswordInputChange = (event) => {
    event.persist();
    this.setState((prevState) => ({
      password: {
        ...prevState.password,
        value: event.target.value,
      },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const { username, password } = this.state;

    console.log('Login:', username.value, password.value);

    // ...
  }

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          placeholder="Type your username..."
          type="text"
          margin="normal"
          autoComplete="username"
          value={username.value}
          onChange={this.handleUsernameInputChange}
          error={!username.isValid}
        />
        <TextField
          required
          fullWidth
          label="Password"
          placeholder="Type your username..."
          type="password"
          margin="normal"
          autoComplete="current-password"
          value={password.value}
          onChange={this.handlePasswordInputChange}
          error={!password.isValid}
        />
        <Button
          fullWidth
          variant="raised"
          type="submit"
          color="primary"
          className={classes.signUpButton}
        >
          Login
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
