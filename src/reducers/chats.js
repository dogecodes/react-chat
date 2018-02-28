import { combineReducers } from 'redux'
import * as types from '../constants/chats';

const initialState = {
  activeId: '',
  allIds: [],
  myIds: [],
  byIds: {}
};

const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_CHAT:
      return action.payload.chat._id;
    case types.JOIN_CHAT_SUCCESS:
      // ...
      return state;
    case types.UNSET_ACTIVE_CHAT:
      return '';
    default:
      return state;
  }
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case types.JOIN_CHAT_SUCCESS:
      // ...
    case types.LEAVE_CHAT_SUCCESS:
      // ...
    case types.DELETE_CHAT_SUCCESS:
      // ...
    default:
      return state;
  }
};

const myIds = (state = initialState.myIds, action) => {
  switch (action.type) {
    case types.FETCH_MY_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case types.JOIN_CHAT_SUCCESS:
      // ...
    case types.LEAVE_CHAT_SUCCESS:
      // ...
    case types.DELETE_CHAT_SUCCESS:
      // ...
    default:
      return state;
  }
};

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CHATS_SUCCESS:
    case types.FETCH_MY_CHATS_SUCCESS:
      return {
        ...state,
        ...action.payload.chats.reduce((ids, chat) => ({
          ...ids,
          [chat._id]: chat,
        }), {}),
      }
    case types.CREATE_CHAT_SUCCESS:
      // ...
    case types.JOIN_CHAT_SUCCESS:
      // ...
    case types.LEAVE_CHAT_SUCCESS:
      // ...
    case types.DELETE_CHAT_SUCCESS:
      // ...
    default:
      return state;
  }
};

export default combineReducers({
  activeId,
  allIds,
  myIds,
  byIds,
})

export const getChatId = (chat) => chat._id;
export const getByIds = (state, ids) => ids.map(id => state.byIds[id]);
