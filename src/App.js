import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';

import {connect} from 'react-redux';
import {Route} from 'react-router-dom';


const mapStateToProps = (state) => ({
    selectedBook : state.books.selectedBook,
    books : state.books.books
});

class App extends React.Component {

    render(){
        return (
          <div>
            <Route path='/' component={Header} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/book" component={Book} />
          </div>
        )
    }


}

export default connect(mapStateToProps)(App);
