import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
  return{
    shouldRedirect : state.auth.token !== null
  }
}
class Login extends React.Component {
  render(){
    const shouldRedirect = this.props.shouldRedirect;

    if(shouldRedirect)
      return <Redirect to="/" />;

    return(
      <LoginForm />
    );
  };
}
export default connect(mapStateToProps)(Login);
