import {getUserApi, loginApi, registerApi} from '../api/api';
import {loginSucess, registerSucess, loginError,logoutSuccess, userProfileLoaded } from './../actionCreators/authActionCreators';


const saveAuth = (user) => {
      window.localStorage.setItem('jwt', user.token);
      window.localStorage.setItem('username', user.username);
}


export const setAuth = (user) => {
    return((dispatch)  => {
        if(user.token !== "" && user.username !== "")
            dispatch(userProfileLoaded(user));
    });
}

export const removeAuth = () => {

    window.localStorage.setItem('jwt', '');
    window.localStorage.setItem('username', '');
    return((dispatch) => {
        dispatch(logoutSuccess());
    })
}

export const getSavedAuth = () => {
    //creating user from saved authentication
    const user = { 
        user:{
            token: window.localStorage.getItem('jwt'),
            username : window.localStorage.getItem('username')
        }
    };
  //  saveAuth(user);
    return user;
}


export const login = (username,password) => {
    return (dispatch) => {
        return loginApi(username,password)
        .then(response => {
            saveAuth(response.user);
            dispatch(loginSucess(response));
        })
        .catch(errors => {
          dispatch(loginError(errors));
        });
    }
};

export const register = (email, username, password) =>{
    return (dispatch) => {

        return registerApi(email,username,password)
        .then(response => {
            saveAuth(response.user);
            dispatch(registerSucess(response));
        });

    }
}

export const getUser = (token) => {
    return(dispatch) => {
        return getUserApi(token)
        .then(response => {
            dispatch(userProfileLoaded(response))
        });
    }
}
