import React from 'react';
import MyPost from './MyPost/MyPost';
import classes from './MyPosts.module.css'

const MyPosts = () => {
   return (
      <div className={classes.main}>
         <div className={classes.formname}>My posts</div>
         <div className={classes.form}></div>
         <div className={classes.listOfPosts}>
            <MyPost value={1} />
            <MyPost value={2} />
            <MyPost value={3} />
         </div>
      </div>
   );
}

export default MyPosts
