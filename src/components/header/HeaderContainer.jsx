import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuth } from './../../redux/authReducer'
import Header from './Header';

class HeaderContainer extends Component {

   componentDidMount() {
      this.props.getAuth()
   }

   render() {
      return <Header {...this.props} />
   }
}
const mapStateToProps = (state) => {
   return {
      userId: state.auth.id,
      email: state.auth.email,
      login: state.auth.login,
      isLogin: state.auth.isLogin
   }

}
const mapDispatchToProps = { getAuth }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
