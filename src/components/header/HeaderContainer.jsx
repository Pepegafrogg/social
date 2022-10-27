import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/authReducer'
import Header from './Header';

class HeaderContainer extends Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true
      })
         .then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
               const { id, login, email } = response.data.data
               this.props.setAuthUserData(id, email, login)
            }
         })
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
const mapDispatchToProps = { setAuthUserData }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
