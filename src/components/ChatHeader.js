import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from './Avatar';
import ChatMenu from './ChatMenu';
import UserMenu from './UserMenu'
import Typography from 'material-ui/Typography';

const styles = theme => ({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
    marginLeft: 320,
  },
  appBarTitle: {
    flex: 1,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.secondary.contrastText,
  },
});

class ChatHeader extends React.Component {
  render() {
    const { classes, activeUser, activeChat, logout, leaveChat, deleteChat, editUser } = this.props;

    return (
      <AppBar color="primary" className={classes.appBar}>
        <Toolbar color="contrast">
          {activeChat ? (
            <React.Fragment>
              <Avatar colorFrom={activeChat._id}>
                {activeChat.title}
              </Avatar>
              <Typography variant="title" className={classes.appBarTitle}>
                {activeChat.title}
                <ChatMenu
                  activeUser={activeUser}
                  onLeaveClick={() => leaveChat(activeChat._id)}
                  onDeleteClick={() => deleteChat(activeChat._id)}
                />
              </Typography>
            </React.Fragment>
          ) : (
            <Typography variant="title" className={classes.appBarTitle}>
              DogeCodes React Chat
            </Typography>
          )}
          <UserMenu
            activeUser={activeUser}
            onLogoutClick={logout}
            onEditProfileClick={editUser}
          />
        </Toolbar>
      </AppBar>
    );
  }
};

export default withStyles(styles)(ChatHeader);
