import React from 'react';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import ChatListItem from './ChatListItem';

const styles = theme => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
  noChats: {
    textAlign: 'center',
  }
});

const ChatList = ({ classes, chats, activeChat }) => (
  <List className={classes.chatsList}>
    {chats && chats.length ? (
      chats.map((chat) => (
        <ChatListItem
          key={chat._id}
          active={activeChat && activeChat._id === chat._id}
          chatId={chat._id}
          {...chat}
        />
      ))
    ) : (
      <Typography variant="subheading" className={classes.noChats}>
        There is no chats yet...
      </Typography>
    )}
  </List>
);

export default withStyles(styles)(ChatList);
