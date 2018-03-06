/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import ChatListItem from './ChatListItem';

const styles = () => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
  noChats: {
    textAlign: 'center',
  },
});

const ChatList = ({
  classes, chats, activeChat, disabled,
}) => (
  <List className={classes.chatsList}>
    {chats && chats.length ? (
      chats.map(chat => (
        <ChatListItem
          disabled={disabled}
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
