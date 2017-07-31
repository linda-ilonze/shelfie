import {TOGGLE_OPEN} from '../constants/actionTypes';

export const toggle = () => {
    return(dispatch) => {
        dispatch({type: TOGGLE_OPEN})
    };
}