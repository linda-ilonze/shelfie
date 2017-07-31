
import {URL} from './base';

class AuthApi {
    static login(username,password){
        return fetch(URL + '/users/login',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({ user:{username,password}})
        }
        )
        .then(response=> {
            return response.json();
        })
        .catch(error=> {
            return error;
        });
    }

    static register(email, username,password){
        return fetch(URL + '/users',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({ user:{email,username,password}})
        }
        )
        .then(response=> {
            return response.json();
        })
        .catch(error=>{
            return error;
        });
    }

    static getUser(token) {
        return fetch(URL + '/users',
    {
        method : 'GET',
        mode : 'cors',
        header : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error;
    });
    }

}

export default AuthApi;
