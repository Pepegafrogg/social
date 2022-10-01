import React from 'react';
import MyPost from './MyPost/MyPost';
import classes from './MyPosts.module.css'

const MyPosts = (props) => {

   const postsElements = props.postsData.map(p => <MyPost id={p.id} post={p.post} likes={p.likes} key={p.id} />)

   const newPostElement = React.createRef()

   const addPost = () => {
      const text = newPostElement.current.value
      props.addPost(text)
   }

   return (
      <div className={classes.main}>
         <div className={classes.formname}>My posts</div>
         <div className={classes.form}>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>add post</button>
         </div>
         <div className={classes.listOfPosts}>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts
