import React from 'react';
import classes from './UserItem.module.css'

const UsersItem = (props) => {
   return (
      <div className={classes.userItem}>
         <div className={classes.avatarAndBtn}>
            <div className={classes.avatar}>
               <img src={props.avatar} alt="" />
            </div>
            {props.friend
               ? <button onClick={() => { props.addFriend(props.id) }} className={classes.btn}>unfollow</button>
               : <button onClick={() => { props.deleteFriend(props.id) }} className={classes.btn}>follow</button>}


         </div>
         <div className={classes.content}>
            <div className={classes.nameAndStatus}>
               <div className={classes.name}>
                  {props.name}
               </div>
               <div className={classes.status}>
                  {props.status}
               </div>
            </div>
            <div className={classes.location}>
               <div className={classes.country}>{props.country}</div>
               <div className={classes.city}>{props.city}</div>
            </div>
         </div>
      </div>
   );
}

export default UsersItem;
