import React from 'react';
import { Field, reduxForm } from 'redux-form';
import MyPost from './MyPost/MyPost';
import classes from './MyPosts.module.css'

const AddPost = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={classes.form}>
         <Field value={props.newPostText} component={'textarea'} name={'postText'}></Field>
         <button>add post</button>
      </form>
   )
}

const AddPostReduxForm = reduxForm({ form: 'addPost', })(AddPost)
const MyPosts = (props) => {
   const postsElements = props.posts.map(p => <MyPost id={p.id} post={p.post} likes={p.likes} key={p.id} />)
   const addPost = (formData) => {
      props.addPost(formData.postText)
   }
   return (
      <div className={classes.main}>
         <div className={classes.formname}>My posts</div>
         <AddPostReduxForm onSubmit={addPost} />
         <div className={classes.listOfPosts}>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts
