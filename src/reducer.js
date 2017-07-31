
import auth from './reducers/auth';
import common from './reducers/common';
import books from './reducers/books';
import header from './reducers/header';

import {combineReducers} from 'redux';

export default combineReducers({
    auth,
    common,
    books,
    header
});