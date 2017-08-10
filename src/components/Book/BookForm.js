import React from 'react';
import Search from './../Search/Search';
import {connect} from 'react-redux';
import {postAddBook} from './../../actions/authActions';
import {Redirect} from 'react-router-dom';
import {resetBookAdded} from './../../actionCreators/authActionCreators';

const mapStateToProps = state =>({
  selectedBook : state.books.selectedBook,
  token : state.auth.token,
  bookAdded : state.books.bookAdded
})


const mapDispatchToProps = (dispatch) => {
  return{
    onAddBook : (book,token) => dispatch(postAddBook(book, token)),
    resetBookAdded : () => dispatch(resetBookAdded())
  }
 }

class Book extends React.Component {
  constructor(props){
    super(props);
    this.addBook = this.addBook.bind(this);

  }
  componentWillMount() {
    //reset bookAdded
    this.props.resetBookAdded();
  }
 
  addBook (e){
    e.preventDefault();
    console.log(e);
    this.props.onAddBook(this.props.selectedBook, this.props.token )
  }
  render(){
    if(this.props.bookAdded)
      return <Redirect to="/" />;

    if( Object.keys(this.props.selectedBook).length > 0 ) {
      return(
        <div>
            <Search />
            <div className="container" >
              <div className="row p-3" >
                
                <img className="img-fluid col-md-3" style={{height:"60%"}} src={this.props.selectedBook.thumbnail}  alt={this.props.selectedBook.title} />
                <div className=" col-md-9  text-muted">
                  <h2 className=" display-4" > {this.props.selectedBook.title}</h2>
                  <p className="py-2"> 
                    <strong> By </strong> {this.props.selectedBook.author ? this.props.selectedBook.author.join(', ') : ""} 
                    </p>
                  <div className=""> {this.props.selectedBook.description}</div>
              </div>
                </div>
                <div className="row pt-3" >
                <div className="form-group col-md-9 ml-auto ">
                  <label htmlFor="bookStorage">Book Storage</label>
                  <select className="form-control" id="bookStorage">
                    <option>Kindle</option>
                    <option>PlayBooks</option>
                    <option>iBooks</option>
                    <option>Shelf</option>
                  </select>
                  </div>
                 </div>
                 <div className="row">
                 <button className="btn btn-primary  ml-auto" type="button" onClick={this.addBook} > Add to Shelfie </button>
                </div>
            </div>
        </div>
    
      )
    }
    else {
      return (
        <Search />
      )
    }
  }
 
}

export default connect(mapStateToProps,mapDispatchToProps)(Book);
