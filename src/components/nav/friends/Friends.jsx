import React from 'react';
import classes from './Friends.module.css'
import FriendsItem from './friendsItem/FriendsItem';

const Friends = (props) => {
   return (
      <div className={classes.friendsWrapper}>
         <div className={classes.friendsHeader}>Friends</div>
         <div className={classes.friendsFlexWrapper}>
            {props.friendsElements}
         </div>
      </div>
   );
}

export default Friends;
