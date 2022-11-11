import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';
import MyPost from './MyPosts';

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.postsData,
   }
}
const mapDispatchToProps = { addPost }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostsContainer
