import React from 'react';
import PreLoader from '../../common/preLoader/preLoader';
import { userPhoto } from '../../users/userItem/usersItem';
import classes from './Profile.module.css'
import ProfileItem from './ProfileItem/ProfileItem';

const Profile = (props) => {
   if (!props.profile) return <PreLoader />
   return (
      <div className={classes.profile}>
         <div className={classes.profileImg}>
            <img src={props.profile.photos.large || userPhoto} alt="" />
         </div>
         <div className={classes.profileInfo}>
            <div className={classes.profileName}>
               {props.profile.fullName}
            </div>
            <div className={classes.profileOtherInfo}>
               <ProfileItem value={'Date of birth: 2january'} />
               <ProfileItem value={'City: Minsk'} />
               <ProfileItem value={`Job: ${props.profile.lookingForAJob}`} />
               <ProfileItem value={`Status: ${props.profile.aboutMe}`} />
            </div>
         </div>
      </div>
   );
}

export default Profile;
