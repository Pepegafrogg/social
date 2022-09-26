import React from 'react';
import classes from './ProfileItem.module.css'
const ProfileItem = (props) => {
   return (
      <div className={classes.profileOtherinfoItem}>
         {props.value}
      </div>
   );
}

export default ProfileItem;
