import React from 'react';
import LoggedInView from './LoggedInView';
import {connect} from 'react-redux';
import Welcome from './Welcome';
import {getSavedAuth} from './../../actions/authActions';

const mapStateToProps = (state) =>({
   books : state.books.books,
   token : state.auth.token
})


class Home extends React.Component {

render(){
  const {token} = this.props;


  if(!token){

      // Check saved token
        const savedToken = getSavedAuth();
        if(!savedToken.user.token)
          return(<div><Welcome /></div> );
  }
  return(<div><LoggedInView /></div>);

}

}
export default connect(mapStateToProps)(Home);
