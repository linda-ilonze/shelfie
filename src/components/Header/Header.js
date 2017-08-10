import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Navbar, NavItem, NavLink,NavDropdown,DropdownToggle,DropdownMenu, DropdownItem,NavbarToggler,NavbarBrand,Collapse,Nav} from 'reactstrap';
import {getSavedAuth,removeAuth,setAuth} from './../../actions/authActions';
import {toggleHeaderOpen,toggleHeaderCollapse} from './../../actionCreators/authActionCreators';


const mapStateToProps = (state) =>{
  return {
    token : state.auth.token,
    username : state.auth.username,
    isOpen : state.header.isOpen,
    isExpanded : state.header.isExpanded
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveAuth : () => dispatch(removeAuth()),
    onSetAuth : (user) => dispatch(setAuth(user)),
    toggle :(status)  => dispatch(toggleHeaderOpen(status)),
    toggleCollapse : (status) => dispatch(toggleHeaderCollapse(status))
  };
}

class Header extends React.Component 
{

  constructor(props){
    super(props);
    this.removeSavedAuth = this.removeSavedAuth.bind(this);
    this.setAuth = this.setAuth.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  setAuth(user){
    this.props.onSetAuth(user);
  }
  removeSavedAuth(){
    this.props.onRemoveAuth();
  }
  toggle(){
    this.props.toggle(!this.props.isOpen);
  }
  toggleCollapse(){
    this.props.toggleCollapse(!this.props.isExpanded);
  }
  getAuth(){
    
    const savedAuth = getSavedAuth();
    if(this.props.token === null ){
      if(savedAuth.user.token !== "" && savedAuth.user.username !== "")
        this.props.onSetAuth(savedAuth);
    }
    const  token = this.props.token ? this.props.token  : savedAuth.user.token;
    const username = this.props.username ? this.props.username : savedAuth.user.username;
    return({token,username});
  }
  render(){
   const {token,username} =  this.getAuth();
    if(token === undefined || token === null  || token === "" )
    {
        return (
          <div>
            <Navbar light toggleable >
              <NavbarToggler right onClick={this.toggle} />
              <NavbarBrand href="/">Shelfie</NavbarBrand>
              <Collapse isOpen={this.props.isExpanded} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink tag={Link} to="/login">Login</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink tag={Link} to="/register">Register</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
      }

    return (
      <Navbar light toggleable >
      <NavbarToggler right onClick={this.toggle} />
      <NavbarBrand href="/">Shelfie</NavbarBrand>
      <Collapse isOpen={this.props.isExpanded} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
            <NavDropdown isOpen={this.props.isOpen} toggle={this.toggle} >
            <DropdownToggle nav caret >
                {username}
              </DropdownToggle>
            <DropdownMenu>
            <DropdownItem header>{username}</DropdownItem>
            <button className="dropdown-item" onClick={this.removeSavedAuth}>Logout</button>
            </DropdownMenu>
          </NavDropdown>
        </Nav>
      </Collapse>
    </Navbar>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps )(Header);
