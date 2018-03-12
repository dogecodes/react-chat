import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    // eslint-disable-next-line
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
  modalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '30%',
    minWidth: '300px',
    padding: theme.spacing.unit * 3,
  },
});

class NewChatButton extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
  };

  state = {
    open: false,
    title: {
      value: '',
      isValid: true,
    },
  };

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  handleTitleChange = (event) => {
    this.setState({
      title: {
        value: event.target.value,
        isValid: true,
      },
    });
  };

  handleCreateClick = (event) => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.value) {
      this.setState({
        title: {
          value: title.value,
          isValid: false,
        },
      });

      return;
    }

    this.props.onClick(title.value);
    this.toggleModal();
    this.setState({
      title: {
        value: '',
        isValid: true,
      },
    });
  };

  render() {
    const { classes, disabled } = this.props;
    const { open, title } = this.state;

    return (
      <React.Fragment>
        <Button
          variant="fab"
          color="primary"
          disabled={disabled}
          className={classes.newChatButton}
          onClick={this.toggleModal}
        >
          <AddIcon />
        </Button>
        <Modal open={open} className={classes.modalWrapper} onClose={this.toggleModal}>
          <Paper className={classes.modal}>
            <Typography variant="title" id="modal-title">
              Create new chat
            </Typography>
            <TextField
              required
              fullWidth
              label="New chat"
              placeholder="Type the title..."
              type="text"
              margin="normal"
              autoComplete="new-chat"
              value={title.value}
              onChange={this.handleTitleChange}
              error={!title.isValid}
            />
            <Button color="primary" onClick={this.handleCreateClick}>
              Create
            </Button>
          </Paper>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(NewChatButton);
