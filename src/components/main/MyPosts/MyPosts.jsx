import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import { TextArea } from '../../common/FormsControls/FormsControls';
import MyPost from './MyPost/MyPost';
import classes from './MyPosts.module.css'

const maxLength5 = maxLengthCreator(5)
const AddPost = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={classes.form}>
         <Field component={TextArea} name={'postText'} placeholder={'Write your post'} validate={[required, maxLength5]}></Field>
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
