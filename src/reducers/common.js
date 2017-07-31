const defaultState = {
    appName : 'Shelfie',
    token : null,
    loginDone : false
};

export default(state = defaultState,action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
        case 'REGISTER':
            return {
                ...state,
                loginDone : true
            } 
        default:
            return state;
    }
}