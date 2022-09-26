import React from 'react';
import classes from './Profile.module.css'
import ProfileItem from './ProfileItem/ProfileItem';

const Profile = () => {
   return (
      <div className={classes.profile}>
         <div className={classes.profileImg}>
            <img src="https://i.pinimg.com/474x/d5/88/a1/d588a14d3cd0feb94e506db675830800.jpg" alt="" />
         </div>
         <div className={classes.profileInfo}>
            <div className={classes.profileName}>
               Dmitry K.
            </div>
            <div className={classes.profileOtherInfo}>
               <ProfileItem value={'Date of birth:2january'} />
               <ProfileItem value={'City: Minsk'} />
               <ProfileItem value={'Education: BSU 11'} />
               <ProfileItem value={'Web Site: 12334jnkdgfl;s'} />
            </div>
         </div>
      </div>
   );
}

export default Profile;
