import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchAllChats, fetchMyChats, setActiveChat, createChat, deleteChat, joinChat, leaveChat, sendMessage } from '../actions/chats'
import * as fromChats from '../reducers/chats';
import ChatPage from '../components/ChatPage';

const mapStateToProps = state => ({
  chats: fromChats.getByIds(state.chats, state.chats.allIds)
  // messages
  // activeUser
  //   isMember — active user is a member of chat
  //   isCreator — active user is a creator of chat
  //   isChatMember — isMember || isCreator
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  // logout,
  // createChat,
  // deleteChat,
  // joinChat,
  // leaveChat,
  // sendMessage
  // editUser,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);
