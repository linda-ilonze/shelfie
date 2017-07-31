import {
BOOKS_LOADED,
UPDATE_INPUT_VALUE,
CLEAR_SUGGESTIONS,
MAYBE_UPDATE_SUGGESTIONS,
LOAD_SUGGESTIONS_BEGIN,
BOOK_SELECTED,
BOOK_ADDED
}  from '../constants/actionTypes';

const defaultState = {
    books:{},
    suggestions:[],
    isLoading:false,
    selectedBook: {},
    value:''
}

export default (state=defaultState ,action={}) =>{
    switch (action.type) {
        case 'USER_PROFILE_LOADED' :
        return {
            ...state,
            books : action.user.books
        }
        case  BOOKS_LOADED:
            return {
                ...state,
                books: action.books
            }
        case BOOK_SELECTED:
            return{
                ...state,
                selectedBook: action.book
            }
        case BOOK_ADDED :
        return {
                ...state //TODO trigger reload of books somehow, clear selection

        }
        case UPDATE_INPUT_VALUE :
        return {
            ...state,
            value: action.value
        }
        case CLEAR_SUGGESTIONS :
        return{
            ...state,
            suggestions: []
        }
        case LOAD_SUGGESTIONS_BEGIN :
        return{
            ...state,
            isLoading:true
        };
        case MAYBE_UPDATE_SUGGESTIONS:
        if(action.value !== state.value){
            return {
                ...state,
                isLoading :false
            };
        }
        return {
            ...state,
            suggestions:action.suggestions,
            isLoading :false
        }
        default:
            return state;
    }
}
