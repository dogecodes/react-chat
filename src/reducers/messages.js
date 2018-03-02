import * as types from '../constants/chats';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE_SUCCESS:
      return [...state, action.payload.message];
    case types.FETCH_CHAT_SUCCESS:
      return action.payload.chat.messages;
    default:
      return state;
  }
}


