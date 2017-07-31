import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router ,Route } from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import './index.css';
import Login from './components/Login/Login';

import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Header from './components/Header/Header';

const routes = [
    { path: '/',
      exact: true,
      main: () => <Home />
    },
    { path: '/login',
      main: () => <Login />,
      exact: true
    },
    { path: '/register',
    main: () => <Register />,
    exact: true
  }
  ];

ReactDOM.render(
    <Provider store={store} >
        <Router>
             <div>
                <Header />
                {
                    routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}

             </div>
        </Router>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
