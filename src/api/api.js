import {URL} from './base';
import axios from 'axios';
import {MAYBE_UPDATE_SUGGESTIONS,LOAD_SUGGESTIONS_BEGIN,BOOKS_LOADED,BOOK_ADDED} from '../constants/actionTypes';


export const getUserApi = (token) =>{
    return axios(
        {
            method : 'get',
            url:  `${URL}/users`,
            headers : {
                'Authorization' : `Token ${token}`
            }
        })
    .then(function (response){ 
        return response.data;
    })
    .catch(function(error){
        console.log(error);
        
    });
}

export const loginApi = (username, password) => {
    return axios.post(`${URL}/users/login`, {
        user: {
            username,
            password
        }
    })
    .then(function(response){
        return response.data;
    })
    .catch(function(error){
        console.log(error);
        return error;
    });
}

export const registerApi = (email, username, password) => {
    return axios.post(`${URL}/users/register`,
    {
        user: {
            email,
            username,
            password  
        }
    
    })
    .then(function(response){
        return response.data;
    })
    .catch(function(error){
        console.log(error);
        return error;
    });
}

export const addBook = (book, token) => {
    return axios.post(`${URL}/users/addBook`, 
    {
        book : {
            title: book.title,
            description: book.description,
            isbn : book.isbn,
            author: book.author,
            category : book.category,
            averageRating : book.averageRating,
            smallThumbnail: book.smallThumbnail,
            thumbnail: book.thumbnail,
            language: book.language,
            publisher: book.publisher,
            publishedDate: book.publishedDate,
            googleLink :book.googleLink      
        }
    })
    .then(function(response){
        return response.data;
    })
    .catch(function(error){
        console.log(error);
        return error;
    })
}
export const searchBooks = (value) => {
    return (dispatch) => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyAp6lvEvmlajjwTPKzztXmoxiX70YmMVCA`)
    .then(response => {
        // transform the books
        if(response.data.items !== null && response.data.items.length === 0 ) return;

        const suggestions = response.data.items
                        .filter(item => item.volumeInfo.printType === 'BOOK')
                        .map(item => {
                            const volumeInfo = item.volumeInfo;
                            const book = {
                                            title: volumeInfo.title,
                                            description: volumeInfo.description,
                                            isbn : volumeInfo.industryIdentifiers? volumeInfo.industryIdentifiers[0].identifier : '',
                                            author: volumeInfo.authors,
                                            category : volumeInfo.categories? volumeInfo.categories[0]: '',
                                            averageRating : volumeInfo.averageRating,
                                            smallThumbnail: volumeInfo.imageLinks? volumeInfo.imageLinks.smallThumbnail: '',
                                            thumbnail: volumeInfo.imageLinks? volumeInfo.imageLinks.thumbnail: '',
                                            language: volumeInfo.language,
                                            publisher: volumeInfo.publisher,
                                            publishedDate: volumeInfo.publishedDate,
                                            googleLink :item.selfLink
                        };
            return book;
        });
        dispatch({type: MAYBE_UPDATE_SUGGESTIONS, suggestions, value});
    })
    .catch(error => error);
}
