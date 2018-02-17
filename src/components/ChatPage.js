import React from 'react';
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import Chat from './Chat';

import { chats, messages } from '../mock-data';

const ChatPage = ({ classes }) => (
  <React.Fragment>
    <ChatHeader />
    <Sidebar chats={chats} />
    <Chat messages={messages}/>
  </React.Fragment>
);

export default ChatPage;
