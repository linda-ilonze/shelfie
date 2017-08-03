// import {getUserApi, loginApi, registerApi} from '../api/api';
// import {MAYBE_UPDATE_SUGGESTIONS,LOAD_SUGGESTIONS_BEGIN,BOOKS_LOADED,BOOK_ADDED} from '../constants/actionTypes';

// export const addBook = (book) => {
//     return(dispatch) => {
//         if(book === null) return;

//         return BookApi.addBook(book)
//         .then (book => {
//             dispatch({type:BOOK_ADDED,book});
//         } );
//     }
// }

export const searchBooks = (value) => {
    return(dispatch) => {
        dispatch({type:LOAD_SUGGESTIONS_BEGIN});

        return BookApi.searchBooks(value)
        .then(response => {
            // transform the books
            if(response.items !== null && response.items.length === 0 ) return;

            const suggestions = response.items
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
        }
        );
    }
}
