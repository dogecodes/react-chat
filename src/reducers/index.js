import { combineReducers } from 'redux';
import auth from './auth';
import chats from './chats';
import messages from './messages';
import services from './services';

export default combineReducers({
  auth,
  chats,
  messages,
  services,
});

// eslint-disable-next-line
export const getUserId = user => user._id;
export const getActiveUser = state => state.auth.user;

export const isCreator = (state, chat) => {
  try {
    return getUserId(chat.creator) === getUserId(getActiveUser(state));
  } catch (e) {
    return false;
  }
};

export const isMember = (state, chat) => {
  try {
    return chat.members.some(member => getUserId(member) === getUserId(getActiveUser(state)));
  } catch (e) {
    return false;
  }
};

export const isChatMember = (state, chat) => isCreator(state, chat) || isMember(state, chat);
