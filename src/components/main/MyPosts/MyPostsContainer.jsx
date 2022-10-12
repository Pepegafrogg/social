import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.postsData,
      nextPostTexts: state.profilePage.nextPostText

   }

}
const mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         const action = updateNewPostTextActionCreator(text)
         dispatch(action)
      },
      addPost: () => {
         dispatch(addPostActionCreator())
      }
   }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer
