import React from 'react';
import classes from './MyPost.module.css'

const MyPost = (props) => {
   return (
      <div className={classes.post}>
         {props.value}
      </div>
   );
}

export default MyPost;
