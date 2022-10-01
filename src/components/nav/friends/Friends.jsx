import React from 'react';
import classes from './Friends.module.css'
import FriendsItem from './friendsItem/FriendsItem';

const Friends = (props) => {
   const friendsElements = props.state.friendsData.map(friend => <FriendsItem id={friend.id} name={friend.name} key={friend.id} />)
   return (
      <div className={classes.friendsWrapper}>
         <div className={classes.friendsHeader}>Friends</div>
         <div className={classes.friendsFlexWrapper}>
            {friendsElements}
         </div>
      </div>
   );
}

export default Friends;
