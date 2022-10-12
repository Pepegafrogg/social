import React from 'react';
import Header from './Header/Header';
import classes from './Main.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile/Profile';

const Main = (props) => {
   return (
      <div className={classes.main}>
         <Header />
         <Profile />
         <MyPostsContainer />
      </div>
   );
}

export default Main;
