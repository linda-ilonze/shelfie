import {URL} from './base';

class BookApi {
    static loadBooks(){
          return fetch(`${URL}/books/books`,
        {
                method:'GET',
                mode: 'cors',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        }
        }).then(response =>  response.json())
        .catch(error=> error); 
    }

    static addBook(book){
        return fetch(`${URL}/books`,
            {
                method : 'POST',
                mode : 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
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
            }).then(response => response.json())
            .catch(error=>error);
    }

    static searchBooks(text){
            return fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=AIzaSyAp6lvEvmlajjwTPKzztXmoxiX70YmMVCA`,
            {
                method : 'GET',
                      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }          
            }).then(response => response.json())
            .catch(error => error);
        
    }
}

export default BookApi;