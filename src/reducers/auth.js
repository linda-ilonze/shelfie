
const defaultState = {
    token : null,
    shouldRedirect: false
};
export default (state= defaultState,action) =>{
    switch (action.type) {
       case 'LOGIN_SUCCESS':
       case 'REGISTER_SUCCESS' :
       return {
           ...state,
            currentUser:action.user,
            errors: action.errors,
            shouldRedirect:true,
            token:action.user.user.token
        };
        case 'UPDATE_FIELD_AUTH':
            return {...state, [action.key]:action.value};
        case 'LOGIN_ERROR':
        return {
          ...state,
          errors: action.errors,
          shouldRedirect:false
        };
        case 'LOGOUT_SUCCESS':
        return{
            ...state,
            currentUser:null,
            errors: null,
            shouldRedirect:false,
            token:null
        };
      
        default:
           return state;
    }
}
