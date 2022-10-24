import React from 'react';
import Header from './Header/Header';
import classes from './Main.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileContainer from './Profile/ProfileContainer';

const Main = (props) => {
   return (
      <div className={classes.main}>
         <Header />
         <ProfileContainer />
         <MyPostsContainer />
      </div>
   );
}

export default Main;
