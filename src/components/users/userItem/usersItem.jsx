import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './UserItem.module.css'

export const userPhoto = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg'

const UsersItem = (props) => {
   const follow = () => {
      props.follow(props.id)
   }
   const unFollow = () => {
      props.unFollow(props.id)
   }


   return (
      <div className={classes.userItem}>
         <div className={classes.avatarAndBtn}>
            <div className={classes.avatar}>
               <NavLink to={`./../profile/${props.id}`}> <img src={props.photo != null ? props.photo : userPhoto} alt="" /> </NavLink>

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
