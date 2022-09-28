import React from 'react';
import MyPost from './MyPost/MyPost';
import classes from './MyPosts.module.css'

const MyPosts = () => {
   const postsData = [
      { id: 2, post: 'Trying', likes: 4 },
      { id: 3, post: 'to create', likes: 2 },
      { id: 4, post: 'my first', likes: 6 },
      { id: 5, post: 'react app', likes: 12 },
      { id: 6, post: 'that is all', likes: 8 }
   ]
   return (
      <div className={classes.main}>
         <div className={classes.formname}>My posts</div>
         <div className={classes.form}>
            <textarea name="Write yout post" id="" ></textarea>
            <button>add post</button>
         </div>
         <div className={classes.listOfPosts}>
            <MyPost id={postsData[0].id} post={postsData[0].post} likes={postsData[0].likes} />
            <MyPost id={postsData[1].id} post={postsData[1].post} likes={postsData[0].likes} />
            <MyPost id={postsData[2].id} post={postsData[2].post} likes={postsData[0].likes} />
         </div>
      </div>
   );
}

export default MyPosts
