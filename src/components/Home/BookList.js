import React from 'react';
import BookCard from './../Book/BookCard';
import {CardDeck} from 'reactstrap';

const BookList = ({books}) => {
   if (books !== undefined) 
   {
        return (
                <div>
                    <h1 className="text-muted text-center display-4 pt-3"> All Books </h1>
                    <CardDeck className="col-md-10 mx-auto ">
                    {
                        books.map((book) => (
                        <BookCard book={book} key={book._id} />
                        ))
                    }
                    </CardDeck>
                </div>
        );
    }
    else {
        return(<div > No Books..... </div> );
    }
}

export default BookList;
