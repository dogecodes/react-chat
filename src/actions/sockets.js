/* eslint no-underscore-dangle: 0 */
import SocketIOClient from 'socket.io-client';
import * as types from '../constants/sockets';
import { redirect } from './services';

export function missingSocketConnection() {
  return {
    type: types.SOCKETS_CONNECTION_MISSING,
    payload: new Error('Missing connection!'),
  };
}

let socket = null;

export function socketsConnect() {
  return (dispatch, getState) => {
    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.sockets) {
      return Promise.resolve();
    }

    dispatch({
      type: types.SOCKETS_CONNECTION_REQUEST,
    });

    socket = SocketIOClient('ws://localhost:8000/', {
      query: { token },
    });

    socket.on('connect', () => {
      dispatch({
        type: types.SOCKETS_CONNECTION_SUCCESS,
      });
    });

    socket.on('error', (error) => {
      dispatch({
        type: types.SOCKETS_CONNECTION_FAILURE,
        payload: new Error(`Connection: ${error}`),
      });
    });

    socket.on('connect_error', () => {
      dispatch({
        type: types.SOCKETS_CONNECTION_FAILURE,
        payload: new Error('We have lost a connection :('),
      });
    });

    socket.on('new-message', (message) => {
      dispatch({
        type: types.RECIEVE_MESSAGE,
        payload: message,
      });
    });

    socket.on('new-chat', ({ chat }) => {
      dispatch({
        type: types.RECIEVE_NEW_CHAT,
        payload: chat,
      });
    });

    socket.on('deleted-chat', ({ chat }) => {
      const { activeId } = getState().chats;

      dispatch({
        type: types.RECIEVE_DELETED_CHAT,
        payload: chat,
      });

      if (activeId === chat._id) {
        dispatch(redirect('/chat'));
      }
    });

    return Promise.resolve();
  };
}

export function sendMessage(content) {
  return (dispatch, getState) => {
    const { activeId } = getState().chats;

    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('send-message', {
      chatId: activeId,
      content,
    }, () => {
      dispatch({
        type: types.SEND_MESSAGE,
        payload: {
          chatId: activeId,
          content,
        },
      });
    });
  };
}

export function mountChat(chatId) {
  return (dispatch) => {
    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('mount-chat', chatId);

    dispatch({
      type: types.MOUNT_CHAT,
      payload: { chatId },
    });
  };
}
export function unmountChat(chatId) {
  return (dispatch) => {
    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('unmount-chat', chatId);

    dispatch({
      type: types.UNMOUNT_CHAT,
      payload: { chatId },
    });
  };
}
