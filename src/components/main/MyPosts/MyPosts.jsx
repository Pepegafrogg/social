import React from 'react';
import classes from './MyPosts.module.css'

const MyPosts = (props) => {

   const addPost = () => {
      props.addPost()
   }

   const onPostChange = (e) => {
      const text = e.target.value
      props.updateNewPostText(text)
   }

   return (
      <div className={classes.main}>
         <div className={classes.formname}>My posts</div>
         <div className={classes.form}>
            <textarea onChange={onPostChange} value={props.newPostText} ></textarea>
            <button onClick={addPost}>add post</button>
         </div>
         <div className={classes.listOfPosts}>
            {props.postsElements}
         </div>
      </div>
   );
}

export default MyPosts
