import React from 'react';
import MyPost from './MyPost/MyPost';
import classes from './MyPosts.module.css'

const MyPosts = (props) => {

   const postsElements = props.postsData.map(p => <MyPost id={p.id} post={p.post} likes={p.likes} />)

   return (
      <div className={classes.main}>
         <div className={classes.formname}>My posts</div>
         <div className={classes.form}>
            <textarea name="Write yout post" id="" ></textarea>
            <button>add post</button>
         </div>
         <div className={classes.listOfPosts}>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts
