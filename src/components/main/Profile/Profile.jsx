import React, { useState } from 'react';
import PreLoader from '../../common/preLoader/preLoader';
import { userPhoto } from '../../common/other/userPhoto';
import classes from './Profile.module.css'
import ProfileData from './ProfileData/ProfileData';
import ProfileDataReduxForm from './ProfileDataReduxForm/ProfileDataReduxForm';

const Profile = (props) => {
   const [editMode, setEditMode] = useState(false);
   if (!props.profile) return <PreLoader />

   const onPhotoSelected = (e) => {
      if (e.target.files.length) {
         props.savePhoto(e.target.files[0])
      }
   }
   const onSubmit = (formData) => {
      props.saveProfile(formData).then(
         () => {
            setEditMode(false)
         }
      )
      setEditMode(false)
   }
   return (
      <div className={classes.profile}>
         <div className={classes.profileImg}>
            <img src={props.profile.photos.large || userPhoto} alt="" />
            <div className={classes.changeProfileImg}>
               {props.isOwner && <input type={'file'} onChange={onPhotoSelected} />}
            </div>
         </div>
         {editMode
            ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} />
            : <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditMode={() => { setEditMode(true) }} />
         }
      </div>
   );
}

export default Profile;
