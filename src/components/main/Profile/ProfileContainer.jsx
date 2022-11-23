import React from 'react'
import { connect } from 'react-redux'
import { getUserProfile, updateStatus, getStatus, savePhoto, saveProfile } from '../../../redux/profileReducer'
import Profile from './Profile'
import { useNavigate, useParams, } from 'react-router-dom';
import { compose } from 'redux';
import { useEffect } from 'react';



const ProfileContainer = (props) => {
   const params = useParams();
   const navigate = useNavigate()
   useEffect(() => {
      let userId = params.userId
      if (!userId) {
         userId = props.authUserId
         if (!userId) navigate('/login')
      }
      props.getUserProfile(userId)
      props.getStatus(userId)


   }, [props.authUserId]);

   return (
      <Profile {...props} profile={props.profile} isOwner={!params.userId} />
   )
}
const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authUserId: state.auth.userId,
      isLogin: state.auth.Islogin,
   }
}
const mapDispatchToProps = { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }

export default compose(connect(mapStateToProps, mapDispatchToProps))(ProfileContainer)

