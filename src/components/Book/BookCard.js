import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

const BookCard = ({book}) => {
  return (
      <Card className="m-3">
        <CardImg width="75%" className="mx-auto m-2" top src={book.thumbnail} alt={book.title}/>
        <CardBlock>
          <CardTitle>{book.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{book.description}</CardText>
          <Button>View Details</Button>
        </CardBlock>
      </Card>
  )
}
export default BookCard;
