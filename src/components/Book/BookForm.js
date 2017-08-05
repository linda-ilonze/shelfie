import React from 'react';
import Search from './../Search/Search';
import {connect} from 'react-redux';

const mapStateToProps = state =>({
  selectedBook : state.books.selectedBook
})

class Book extends React.Component {
  render(){
    if( Object.keys(this.props.selectedBook).length > 0 ) {
      return(
        <div>
            <Search />
    
            <div className="container" >
              <div className="row px-4 pt-4" >
                
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
                <div className="form-group col-md-10 mx-auto ">
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
                 <button className="btn btn-primary  pull-right" type="button" > Add </button>
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

export default connect(mapStateToProps)(Book);
