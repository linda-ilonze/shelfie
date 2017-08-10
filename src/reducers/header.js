import {HEADER_TOGGLE, HEADER_COLLAPSE} from './../constants/actionTypes';
const defaultState = {
    isOpen :false,
    isExpanded:false
}

export default(state = defaultState ,  action) => {
    switch(action.type){
        case HEADER_TOGGLE :
            return {
                ...state,
                isOpen : action.status
            }
        case HEADER_COLLAPSE :
            return {
                ...state,
                isExpanded : action.status
            }
    default:
        return state;
    }
}