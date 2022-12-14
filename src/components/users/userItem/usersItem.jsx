import React from 'react';
import { NavLink } from 'react-router-dom';
import { userPhoto } from '../../common/other/userPhoto';
import classes from './UserItem.module.css'


const UsersItem = (props) => {
   const follow = () => {
      props.followTC(props.id)
   }
   const unFollow = () => {
      props.unFollowTC(props.id)
   }


   return (
      <div className={classes.userItem}>
         <div className={classes.avatarAndBtn}>
            <div className={classes.avatar}>
               <NavLink to={`./../profile/${props.id}`}> <img src={props.photos.small != null ? props.photos.small : userPhoto} alt="" /> </NavLink>
            </div>
            {props.followed
               ? <button disabled={props.isClicked.some(id => id === props.id)} onClick={() => { unFollow() }} className={classes.btn}>unfollow</button>
               : <button disabled={props.isClicked.some(id => id === props.id)} onClick={() => { follow() }} className={classes.btn}>follow</button>
            }
         </div>
         <div className={classes.content}>
            <div className={classes.nameAndStatus}>
               <div className={classes.name}>
                  {props.name}
               </div>
               <div className='status'>
                  {props.status || 'status'}
               </div>
            </div>
            <div className={classes.location}>
               <div className='country'>country</div>
               <div className='city'>city</div>
            </div>
         </div>
      </div>
   );
}

export default UsersItem;
