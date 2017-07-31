import {URL} from './base';
import axios from 'axios';

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
