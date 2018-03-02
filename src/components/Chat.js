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

const Chat = ({ classes, messages, activeChat, activeUser, joinChat, sendMessage }) => (
  <main className={classes.chatLayout}>
    <ChatMessageList
      messages={messages}
      activeUser={activeUser}
    />
    {activeChat && <MessageInput
      sendMessage={(content) => sendMessage(activeChat._id, content)}
      showJoinButton={!activeUser.isChatMember}
      onJoinButtonClick={() => joinChat(activeChat._id)}
      activeUser={activeUser}
    />}
  </main>
);

export default withRouter(withStyles(styles)(Chat));
