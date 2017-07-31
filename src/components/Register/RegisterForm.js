import React from 'react';
import {register} from './../../actions/authActions';
import {connect} from 'react-redux';
import {UPDATE_FIELD_AUTH} from './../../constants/actionTypes';

const mapStateToProps = (state) => {
    return {
      username : state.auth.username,
      password : state.auth.password,
      email : state.auth.email
    }
  };
  
  const mapDispatchToProps = (dispatch) => ({
      onRegister:(email,username,password) => dispatch( register(email,username,password) ),
      onPasswordChange : (value)  => dispatch({type:UPDATE_FIELD_AUTH, "key" : "password" , value }),
      onUsernameChange : (value)  => dispatch({type:UPDATE_FIELD_AUTH, "key" : "username" , value }),
      onEmailChange : (value)  => dispatch({type:UPDATE_FIELD_AUTH, "key" : "email" , value })
  });
  
  class RegisterForm extends React.Component {
  
      constructor(props){
      super(props);
      this.register = this.register.bind(this);
      this.passwordChange = this.passwordChange.bind(this);
      this.usernameChange = this.usernameChange.bind(this);
      this.emailChange = this.emailChange.bind(this);
      }
  
      register = (e) => {
          e.preventDefault();
       this.props.onRegister(this.props.email, this.props.username, this.props.password);
  }
   passwordChange = (e) => {
      this.props.onPasswordChange(e.target.value);
  }
   usernameChange = (e) => {
      this.props.onUsernameChange(e.target.value);
  }  
  emailChange = (e) => {
    this.props.onEmailChange(e.target.value);
} 
      
      render(){
            const username = this.props.username;
            const password = this.props.password;
            const email = this.props.email;
  
          return (
              <div className="col-md-6" >
                  <p className="h2 text-muted py-3 pl-3" > Register </p>
                      <form className="form-horizontal" onSubmit={this.register}>
                        <div className="form-group">
                          <label htmlFor="inputUsername" className="col-sm-2 control-label">Username</label>
                          <div className="col-sm-10">
                              <input  className="form-control" id="inputUsername" value={username} onChange={this.usernameChange} />
                          </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-10">
                                <input  className="form-control" type="email" id="inputEmail" value={email} onChange={this.emailChange} />
                            </div>
                        </div>
                      <div className="form-group">
                          <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
                          <div className="col-sm-10">
                              <input type="password" className="form-control" id="inputPassword" onChange={this.passwordChange} value={password} />
                          </div>
                          </div>
                          <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-10">
                              <button type="submit" className="btn btn-primary">Register</button>
                          </div>
                          </div>
                      </form>
                  </div>
          )
      }
    
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm);