import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {
    return(
      <div>
        <div className="jumbotron">
            <h1 className="display-3">Welcome to Shelfie!</h1>
            <p className="lead">This is an online shelf to collate all your books in one place!</p>
            <hr className="my-4"></hr>
            <p className="lead">
              <Link className="btn btn-primary btn-lg" to="/getStarted" >Get Started </Link>
            </p>
        </div>
      </div>
    );
  }

  export default  Welcome ;