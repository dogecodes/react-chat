import { combineReducers } from 'redux'
import auth from './auth';
import chats from './chats';
import messages from './messages';

export default combineReducers({
  auth,
  chats,
  messages,
});
