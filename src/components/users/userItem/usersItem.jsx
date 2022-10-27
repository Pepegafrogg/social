import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './UserItem.module.css'

export const userPhoto = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg'
const key = 'API-KEY: b917cbcf-35cd-47f9-8698-6f2ce62527ae'

const UsersItem = (props) => {
   const follow = () => {
      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
         withCredentials: true,
         headers: {
            'API-KEY': 'b917cbcf-35cd-47f9-8698-6f2ce62527ae',
         }
      })
         .then(response => {
            if (response.data.resultCode === 0) {
               props.follow(props.id)
               console.log(props.followed);
            }
         })
   }

   const unFollow = () => {
      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
         withCredentials: true,
         headers: {
            'API-KEY': 'b917cbcf-35cd-47f9-8698-6f2ce62527ae',
         }
      })
         .then(response => {
            if (response.data.resultCode === 0) {
               props.unFollow(props.id)
               console.log(props.followed);
            }
         })
   }


   return (
      <div className={classes.userItem}>
         <div className={classes.avatarAndBtn}>
            <div className={classes.avatar}>
               <NavLink to={`./../profile/${props.id}`}> <img src={props.photo != null ? props.photo : userPhoto} alt="" /> </NavLink>

            </div>
            {props.followed
               ? <button onClick={() => { unFollow() }} className={classes.btn}>unfollow</button>
               : <button onClick={() => { follow() }} className={classes.btn}>follow</button>}


         </div>
         <div className={classes.content}>
            <div className={classes.nameAndStatus}>
               <div className={classes.name}>
                  {props.name}
               </div>
               <div className='status'>
                  status
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
