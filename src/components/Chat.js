import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles'
import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';

const styles = theme => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
});

const Chat = ({ classes, messages }) => (
  <main className={classes.chatLayout}>
    <ChatMessageList messages={messages} />
    <MessageInput />
  </main>
);

export default withRouter(withStyles(styles)(Chat));
