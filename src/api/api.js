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
    });
}
