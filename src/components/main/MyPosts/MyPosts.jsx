import React from 'react';
import { addPostActionCreator, updateNewPostText, updateNewPostTextActionCreator } from '../../../redux/state';
import MyPost from './MyPost/MyPost';
import classes from './MyPosts.module.css'

const MyPosts = (props) => {
   const postsElements = props.postsData.map(p => <MyPost id={p.id} post={p.post} likes={p.likes} key={p.id} />)

   const newPostElement = React.createRef()

   const addPost = () => {
      props.dispatch(addPostActionCreator())
   }

   const onPostChange = () => {
      const text = newPostElement.current.value
      const action = updateNewPostTextActionCreator(text)
      props.dispatch(action)
   }

   return (
      <div className={classes.main}>
         <div className={classes.formname}>My posts</div>
         <div className={classes.form}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} ></textarea>
            <button onClick={addPost}>add post</button>
         </div>
         <div className={classes.listOfPosts}>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts
