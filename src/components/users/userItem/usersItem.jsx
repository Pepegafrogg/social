import React from 'react';
import classes from './UserItem.module.css'

{/* <div className={classes.avatar}>
   <img src={props.avatar} alt="" />
</div> */}

{/* <div className={classes.status}>
{props.status}
</div> */}

{/* <div className={classes.country}>{props.country}</div>
<div className={classes.city}>{props.city}</div> */}
const userPhoto = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg'
const UsersItem = (props) => {
   return (
      <div className={classes.userItem}>
         <div className={classes.avatarAndBtn}>
            <div className={classes.avatar}>
               <img src={props.photo != null ? props.photo : userPhoto} alt="" />
            </div>
            {props.followed
               ? <button onClick={() => { props.unfollow(props.id) }} className={classes.btn}>unfollow</button>
               : <button onClick={() => { props.follow(props.id) }} className={classes.btn}>follow</button>}


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
