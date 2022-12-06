import React, { useEffect, useState } from 'react';
import PreLoader from '../../common/preLoader/preLoader';
import { userPhoto } from '../../common/other/userPhoto';
import classes from './Profile.module.css'
import ProfileData from './ProfileData/ProfileData';
import ProfileDataReduxForm from './ProfileDataReduxForm/ProfileDataReduxForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getStatus, getUserProfile, savePhoto, saveProfile } from '../../../redux/profileReducer';

const Profile = (props) => {
   const dispatch = useDispatch()
   const { profile, status } = useSelector(state => state.profilePage)
   const { userId } = useSelector(state => state.auth)
   const [editMode, setEditMode] = useState(false);
   const params = useParams();
   const navigate = useNavigate()
   const isOwner = !params.userId

   const onPhotoSelected = (e) => {
      if (e.target.files.length) {
         dispatch(savePhoto(e.target.files[0]))
      }
   }
   const onSubmit = (formData) => {
      dispatch(saveProfile(formData)).then(
         () => {
            setEditMode(false)
         }
      )
      setEditMode(false)
   }
   useEffect(() => {
      let authUserId = params.userId
      if (!authUserId) {
         authUserId = userId
         if (!authUserId) navigate('/login')
      }
      dispatch(getUserProfile(authUserId))
      dispatch(getStatus(authUserId))
   }, [userId]);
   if (!profile) return <PreLoader />

   return (
      <div className={classes.profile}>
         <div className={classes.profileImg}>
            <img src={profile.photos.large || userPhoto} alt="" />
            <div className={classes.changeProfileImg}>
               {isOwner && <input type={'file'} onChange={onPhotoSelected} />}
            </div>
         </div>
         {editMode
            ? <ProfileDataReduxForm isOwner={isOwner} initialValues={profile} onSubmit={onSubmit} profile={profile} />
            : <ProfileData status={status} isOwner={isOwner} profile={profile} activateEditMode={() => { setEditMode(true) }} />
         }
      </div>
   );
}

export default Profile;
