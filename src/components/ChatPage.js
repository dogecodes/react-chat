import React from 'react';
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import Chat from './Chat';

import { messages } from '../mock-data';

class ChatPage extends React.Component {
  componentDidMount() {
    const { match, fetchAllChats, fetchMyChats, setActiveChat } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ])
      .then(() => {
        // If we pass a chatId, then fetch messages from chat
        if (match.params.chatId) {
          setActiveChat(match.params.chatId);
        }
      })
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params }, setActiveChat } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
    }
  }

  render() {
    const { chats } = this.props;

    return (
      <React.Fragment>
        <ChatHeader
          // ...
          // you need to pass additional props, for example:
          // active user, active chat, leaveChat, deleteChat, logout, editUser
        />
        <Sidebar
          chats={chats}
          // ...
          // you need to pass additional props, for example:
          // createChat
        />
        <Chat
          messages={messages}
          // ...
          // you need to pass additional props, for example:
          // active user, joinChat, messages
        />
      </React.Fragment>
    );
  }
};

export default ChatPage;
