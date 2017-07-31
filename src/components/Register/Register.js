import React from 'react';
import {connect} from 'react-redux';
import RegisterForm from './RegisterForm';
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state) => {
    return{
      shouldRedirect : state.auth.token !== null
    }
  }
  class Register extends React.Component {
    render(){
      const shouldRedirect = this.props.shouldRedirect;
  
      if(shouldRedirect)
        return <Redirect to="/" />;
  
      return(
        <RegisterForm />
      );
    };
  }
  export default connect(mapStateToProps)(Register);
