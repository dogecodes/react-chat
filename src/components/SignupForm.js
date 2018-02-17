import React from 'react';
import { withStyles } from 'material-ui';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2,
  }
})

class SignupForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    repeatedPassword: {
      value: '',
      isValid: true,
    },
  }

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatedPassword: { ...repeatedPassword, isValid },
    });

    return isValid;
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

  handleRepeatedPasswordInputChange = (event) => {
    event.persist();
    this.setState((prevState) => ({
      repeatedPassword: {
        ...prevState.repeatedPassword,
        value: event.target.value,
      },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validate()) {
      return;
    } 

    const { username, password } = this.state;

    console.log('Sign up:', username.value, password.value);

    // ...
  }

  render() {
    const { classes } = this.props;
    const { username, password, repeatedPassword } = this.state;

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
          autoComplete="new-password"
          value={password.value}
          onChange={this.handlePasswordInputChange}
          error={!password.isValid}
        />
         <TextField
          required
          fullWidth
          label="Repeat password"
          placeholder="Type your username..."
          type="password"
          margin="normal"
          autoComplete="new-password"
          value={repeatedPassword.value}
          onChange={this.handleRepeatedPasswordInputChange}
          error={!repeatedPassword.isValid}
        />
        <Button
          fullWidth
          variant="raised"
          type="submit"
          color="primary"
          className={classes.signUpButton}
        >
          Signup
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SignupForm);
