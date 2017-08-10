import React from 'react';
import { connect } from 'react-redux';
import { getUser } from './../../actions/authActions';
import NoBooksView from './NoBooksView';
import SummaryView from './SummaryView';
import BookList from './BookList';

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

class LoggedInView extends React.Component {
  componentWillMount() {
    if(this.props.token)
      this.props.onLoadBooks(this.props.token);
  }
  render() {
    const books = this.props.books;

    if (books !== undefined) {
      return (<div>         
        <SummaryView books={books}/>
        <BookList  books={books} />
        </div>);
    }
    return (<div>     
              <NoBooksView />
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInView);
