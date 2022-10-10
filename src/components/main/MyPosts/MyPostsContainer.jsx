import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPost from './MyPost/MyPost';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
   const postsElements = props.store.profilePage.postsData.map(p => <MyPost id={p.id} post={p.post} likes={p.likes} key={p.id} />)


   const addPost = () => {
      props.dispatch(addPostActionCreator())
   }

   const updateNewPostText = (text) => {
      const action = updateNewPostTextActionCreator(text)
      props.dispatch(action)
   }

   return (
      <MyPosts
         postsElements={postsElements}
         updateNewPostText={updateNewPostText}
         addPost={addPost}
         nextPostText={props.store.profilePage.nextPostText} />
   );
}

export default MyPostsContainer
