import uuid from 'uuid';

import { SET_ALERT, REMOVE_ALERT } from './types';

//dispatch more than one actionType from this function - able to do this because of Thunk middleware
//We have an action called setAlert that dispatches the type of setAlert to the reducer which adds the alert to the state (which is an empty array)

//6. setAlert is the action being called (set the message and alert type then generated an ID - go to reducers/alert
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
