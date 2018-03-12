import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';

const styles = () => ({
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

const Chat = ({
  classes,
  messages,
  activeChat,
  activeUser,
  joinChat,
  sendMessage,
  isConnected,
}) => (
  <main className={classes.chatLayout}>
    <ChatMessageList messages={messages} activeUser={activeUser} />
    {activeChat && (
      <MessageInput
        disabled={!isConnected}
        sendMessage={sendMessage}
        showJoinButton={!activeUser.isChatMember}
        // eslint-disable-next-line
        onJoinButtonClick={() => joinChat(activeChat._id)}
        activeUser={activeUser}
      />
    )}
  </main>
);

Chat.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    chatId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    sender: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
  })).isRequired,
  activeChat: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  activeUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool.isRequired,
  }).isRequired,
  joinChat: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

Chat.defaultProps = {
  activeChat: null,
};

export default withRouter(withStyles(styles)(Chat));
