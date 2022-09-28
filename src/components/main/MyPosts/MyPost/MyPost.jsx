import React from 'react';
import classes from './MyPost.module.css'

const MyPost = (props) => {
   return (
      <div className={classes.post}>
         {props.post}
         likes: {props.likes}
      </div>
   );
}

export default MyPost;
