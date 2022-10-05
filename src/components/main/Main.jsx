import React from 'react';
import Header from './Header/Header';
import classes from './Main.module.css'
import MyPosts from './MyPosts/MyPosts';
import Profile from './Profile/Profile';

const Main = (props) => {
   return (
      <div className={classes.main}>
         <Header />
         <Profile />
         <MyPosts updateNewPostText={props.updateNewPostText} postsData={props.profilePage.postsData} newPostText={props.profilePage.nextPostText} addPost={props.addPost} />
      </div>
   );
}

export default Main;
