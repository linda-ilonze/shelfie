import React from 'react';
import {Link} from 'react-router-dom';

 const NoBooksView = () => {
    return(
        <div >
            <div className="jumbotron">
                <h1 className="display-3">Welcome Back</h1>
                <p className="lead"> This is an online shelf to collate all your books in one place!</p>
                <hr className="my-4"></hr>
                <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/book" >Add Book </Link>
                </p>
            </div>
        </div>
    );
  }
export default NoBooksView;