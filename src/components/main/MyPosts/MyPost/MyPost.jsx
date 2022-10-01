import React from 'react';
import classes from './MyPost.module.css'

const MyPost = (props) => {
   return (
      <div className={classes.post}>
         <div className={classes.postText}>{props.post}</div>
         <div className={classes.postLikes}>likes: {props.likes}</div>
      </div>
   );
}

export default MyPost;
