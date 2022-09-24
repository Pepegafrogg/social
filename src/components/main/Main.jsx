import React from 'react';
import Header from './Header/Header';
import classes from './Main.module.css'
import MyPosts from './MyPosts/MyPosts';
import Profile from './Profile/Profile';

const Main = () => {
   return (
      <div className={classes.main}>
         <Header />
         <Profile />
         <MyPosts />
      </div>
   );
}

export default Main;
