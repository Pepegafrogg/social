import React from 'react';
import classes from './FriendsItem.module.css'

const FriendsItem = (props) => {
   return (
      <div className={classes.friendsItem}>
         <div className={classes.avatar}></div>
         <div className={classes.name}>
            {props.name}
         </div>
      </div>
   );
}

export default FriendsItem;
