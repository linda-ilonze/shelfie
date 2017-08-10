import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle } from 'reactstrap';

const BookCard = ({book}) => {
  return (
    <div className="col-md-3">
        <Card className="pt-2 mb-3" onClick={()=> alert("clicked")}>
          <CardImg width="75%" className="mx-auto" top src={book.thumbnail} alt={book.title}/>
          <CardBlock>
            <CardTitle>{book.title}</CardTitle>
            <CardText className="text-muted">By {book.author ? book.author.join(',') : " N/A" }</CardText>

            {/* <CardText>{book.description}</CardText> */}
          </CardBlock>
        </Card>
      </div>
  )
}
export default BookCard;
