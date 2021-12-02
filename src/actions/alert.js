import { v4 } from 'uuid'
import {SET_ALERT, REMOVE_ALERT} from "./constant";

export const setAlert = (dispatch, msg, alertType) => {
    const id = v4();
    dispatch({
        type: SET_ALERT,
        payload: {msg, alertType, id}
    })
    setTimeout(()=> dispatch({
        type: REMOVE_ALERT,
        payload:id
    }), 3000);
}