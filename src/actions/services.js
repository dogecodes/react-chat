import * as types from '../constants/services';
import history from '../utils/history';

export function redirect(to) {
  return (dispatch) => {
    history.push(to);
    dispatch({
      type: types.REDIRECT,
      payload: { to },
    });
  }
}
