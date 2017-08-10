import {
    BOOKS_LOADED,
    BOOK_ADDED,
    USER_PROFILE_LOADED,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS,
    LOGIN_ERROR,
    RESET_BOOK_ADDED,
    HEADER_TOGGLE,
    HEADER_COLLAPSE
    }  from '../constants/actionTypes';

export const loginSucess = (user) => {
    return ({
        type : LOGIN_SUCCESS,
        user: user
    });
}
export const registerSucess = (user) => {
    return ({
        type : REGISTER_SUCCESS,
        user: user
    });
}

export const logoutSuccess = (user) => {
    return({
        type: LOGOUT_SUCCESS,
        user:user
    });
}

export const loginError = (error) => {
    return({
        type: LOGIN_ERROR,
        error:error
    });
}

export const userProfileLoaded = (user) => {
    return({
        type : USER_PROFILE_LOADED,
        user : user,
        token : user.token
    });
}
export const bookLoaded = (books) => {
    return({
        type : BOOKS_LOADED,
        books: books
    });
}
export const bookAdded = () => {
    return({
        type : BOOK_ADDED,
        bookAdded : true
    });
}

export const resetBookAdded = () => {
    return({
        type : RESET_BOOK_ADDED,
        bookAdded :false
    });
}

export const toggleHeaderOpen =(status) =>{
    return({
        type: HEADER_TOGGLE,
        status 
    })
}
export const toggleHeaderCollapse =(status) =>{
    return({
        type: HEADER_COLLAPSE,
        status 
    })
}
