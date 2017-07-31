const defaultState = {
    isOpen :false
}

export default(state = defaultState ,  action) => {
    switch(action.type){
        case 'OPEN':
            return {
                ...state,
                isOpen : action.isOpen
            }
    default:
        return state;
    }
}