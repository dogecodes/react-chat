import * as types from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.RECIEVE_MESSAGE:
      return [...state, action.payload.message];
    case types.FETCH_CHAT_SUCCESS:
      return action.payload.chat.messages;
    default:
      return state;
  }
};
