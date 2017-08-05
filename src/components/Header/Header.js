import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {getSavedAuth,removeAuth,setAuth} from './../../actions/authActions';

const mapStateToProps = (state) =>{
  return {
    token : state.auth.token,
    username : state.auth.username
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveAuth : () => dispatch(removeAuth()),
    onSetAuth : (user) => dispatch(setAuth(user))
  };
}

class Header extends React.Component 
{

  constructor(props){
    super(props);
    this.removeSavedAuth = this.removeSavedAuth.bind(this);
    this.setAuth = this.setAuth.bind(this);
  }

  setAuth(user){
    this.props.onSetAuth(user);
  }
  removeSavedAuth(){
    this.props.onRemoveAuth();
  }
  render(){
    const savedAuth = getSavedAuth();

    if(this.props.token === null ){
      if(savedAuth.user.token !== "" && savedAuth.user.username !== "")
        this.props.onSetAuth(savedAuth);
    }
    const  token = this.props.token ? this.props.token  : savedAuth.user.token;
    const username = this.props.username ? this.props.username : savedAuth.user.username;
    if(token === undefined || token === null  || token === "" ){
        return (
          <div>
          <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="navbar-brand" to="/">Shelfie</NavLink>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home </NavLink>
                </li>
              </ul>
    
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink  className="nav-link" to="/login" > Login </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link" to="/register" > Register </NavLink>
                </li>
              </ul>
              : <div> Other </div>
            </div>
            </nav>
          </div>
        )
      }

    return (
      <div>
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink className="navbar-brand" to="/">Shelfie</NavLink>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home </NavLink>
            </li>
          </ul>

          <span className="navbar-item">
            <NavLink  className="nav-link" to="/" > {username} </NavLink>
          </span>
          <span className="navbar-item">
            <button  className="nav-link" onClick={this.removeSavedAuth} type="submit" > Logout</button>
          </span>
        </div>
        </nav>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps )(Header);
