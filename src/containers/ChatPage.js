import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { fetchAllChats, fetchMyChats, setActiveChat, createChat, deleteChat, joinChat, leaveChat } from '../actions/chats';
import { editUser } from '../actions/users';
import { sendMessage, mountChat, unmountChat, socketsConnect } from '../actions/sockets';
import * as fromChats from '../reducers/chats';
import * as fromState from '../reducers';
import ChatPage from '../components/ChatPage';

const mapStateToProps = (state) => {
  const activeChat = fromChats.getById(state.chats, state.chats.activeId);

  return {
    isAuthenticated: state.auth.isAuthenticated,
    chats: {
      active: activeChat,
      my: fromChats.getByIds(state.chats, state.chats.myIds),
      all: fromChats.getByIds(state.chats, state.chats.allIds),
    },
    activeUser: {
      ...state.auth.user,
      isMember: fromState.isMember(state, activeChat),
      isCreator: fromState.isCreator(state, activeChat),
      isChatMember: fromState.isChatMember(state, activeChat),
    },
    messages: state.messages,
    error: state.services.errors.chat,
    isConnected: state.services.isConnected,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  logout,
  createChat,
  deleteChat,
  joinChat,
  leaveChat,
  editUser,
  sendMessage,
  mountChat,
  unmountChat,
  socketsConnect,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatPage);
