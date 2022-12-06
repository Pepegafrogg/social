import React from 'react';
import MyPost from './MyPost/MyPost';
import classes from './MyPosts.module.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';

const MyPosts = (props) => {
   const { postsData } = useSelector(state => state.profilePage)
   const dispatch = useDispatch()
   const { register, handleSubmit, reset } = useForm();
   const postsElements = postsData.map(p => <MyPost id={p.id} post={p.post} likes={p.likes} key={p.id} />)

   const onSubmit = data => {
      dispatch(addPost(data.newPost))
      reset()

   }
   return (
      <div className={classes.main}>
         <div className={classes.formname}>My posts</div>

         <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Write yout post' {...register("newPost")} />
            <button >Login</button>
         </form>
         <div className={classes.listOfPosts}>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts
