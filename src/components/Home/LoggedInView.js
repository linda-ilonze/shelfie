import React from 'react';
import { connect } from 'react-redux';
import { getUser } from './../../actions/authActions';
import BookCard from './../Book/BookCard';
import { Card,CardImg, CardBlock, CardGroup } from 'reactstrap';
import KindleIcon from './../../images/Kindle-icon.png';
import PlayBooksIcon from './../../images/Google-Play-Books-icon.png';
import IBooksIcon from './../../images/iBook-icon.png';


const mapStateToProps = (state) => {
  return {
    books: state.books.books,
    token : state.auth.token,
    username : state.auth.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadBooks: (token) => dispatch(getUser(token))
  }
}

const Summary = ({books}) => {
  
  return(
    <div className="row bg-faded p-3">
    <div className="mx-auto">
      <CardGroup >
        <Card className="m-3"> 
          <CardBlock>
            <h1 className="display-4 pull-right text-muted">12</h1>
            <CardImg width="50%" src={KindleIcon} alt="Kindle Books"/>
          </CardBlock>
        </Card>
        <Card className="m-3">
          <CardBlock>
            <h1 className="display-4 pull-right text-muted">34</h1>
            <CardImg width="50%" src={PlayBooksIcon} alt="Google Play Books"/>
          </CardBlock>
        </Card>
        <Card className="m-3">
        <CardBlock>
          <h1 className="display-4 pull-right text-muted">4</h1>
          <CardImg width="50%" src={IBooksIcon} alt="iBooks"/>
        </CardBlock>
        </Card>
        <Card className="m-3">
          <CardBlock>
            <h1 className="display-4 pull-right text-muted">41</h1>
            <i className="fa fa-book fa-5x"></i>
          </CardBlock>
        </Card>
      </CardGroup>
  </div>
  </div>
  );
}


class LoggedInView extends React.Component {

  componentWillMount() {
    if(this.props.token)
      this.props.onLoadBooks(this.props.token);
  }
  render() {
    const books = this.props.books;

    if (books !== undefined) {
      return (
        <div>
          <Summary books={books}/>
          <h1 className="text-muted text-center display-4 pt-3"> All Books </h1>
          <CardGroup className="col-md-10 mx-auto ">
            {
              books.map((book) => (
                <BookCard book={book} key={book.updatedAt} />
              ))
            }
          </CardGroup>
        </div>
      );
    }
    return (
      <div>
        <h1 className="text-muted text-center display-4 pt-3" > All Books </h1>
        No Books yet....
       </div>);

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInView);
