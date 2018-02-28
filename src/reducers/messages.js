import * as types from '../constants/chats';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE_SUCCESS:
      // ...
      return state;
    case types.FETCH_CHAT_SUCCESS:
      // ...
      return state;
    default:
      return state;
  }
}


