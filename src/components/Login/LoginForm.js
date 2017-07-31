import React from 'react';
import {connect} from 'react-redux';
import {login} from './../../actions/authActions';
import {UPDATE_FIELD_AUTH} from './../../constants/actionTypes';


const mapStateToProps = (state) => {
  return {
    username : state.auth.username,
    password : state.auth.password
  }
};

const mapDispatchToProps = (dispatch) => ({
    onLogin:(username,password) => dispatch( login(username,password) ),
    onPasswordChange : (value)  => dispatch({type:UPDATE_FIELD_AUTH, "key" : "password" , value }),
    onUsernameChange : (value)  => dispatch({type:UPDATE_FIELD_AUTH, "key" : "username" , value })
});

class LoginForm extends React.Component {

	constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);

	}

	login = (e) => {
		e.preventDefault();
	 this.props.onLogin(this.props.username, this.props.password);
}
 passwordChange = (e) => {
	this.props.onPasswordChange(e.target.value);
}
 usernameChange = (e) => {
	this.props.onUsernameChange(e.target.value);
}  

	
	render(){
		const username = this.props.username;
    const password = this.props.password;

		return (
			<div className="col-md-6" >
				<p className="h2 text-muted py-3 pl-3" > Login </p>
					<form className="form-horizontal" onSubmit={this.login}>
						<div className="form-group">
						<label htmlFor="inputUsername" className="col-sm-2 control-label">Username</label>
						<div className="col-sm-10">
							<input  className="form-control" id="inputUsername" value={username} onChange={this.usernameChange} />
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
							<div className="checkbox">
								<label><input type="checkbox" /> Remember me</label>
							</div>
						</div>
						</div>
						<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" className="btn btn-primary">Sign in</button>
						</div>
						</div>
					</form>
				</div>
		)
	}
  
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
