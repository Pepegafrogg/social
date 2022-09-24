import React from 'react';
import classes from './Main.module.css'

const Main = () => {
   return (
      <div className={classes.main}>
         <div className={classes.main__header}>
            <img className={classes.header__img} src="http://green-forest36.ru/wp-content/uploads/2020/04/2-1.jpg" alt="" />
         </div>
         <div className={classes.main__profile}>
            <div className={classes.profile__img}>
               <img className={classes.profile__img1} src="https://i.pinimg.com/474x/d5/88/a1/d588a14d3cd0feb94e506db675830800.jpg" alt="" />
            </div>
            <div className={classes.profile__info}>
               <div className={classes.profile__name}>
                  Dmitry K.
               </div>
               <div className={classes.profile__otherinfo}>
                  <div className={classes.profile__otherinfoitem}>Date of birth:2january</div>
                  <div className={classes.profile__otherinfoitem}>City: Minsk</div>
                  <div className={classes.profile__otherinfoitem}>Education: BSU 11</div>
                  <div className={classes.profile__otherinfoitem}>Web Site: 12334jnkdgfl;s</div>
               </div>
            </div>
         </div>
         <div className={classes.main__posts}>
            <div className={classes.main__formname}>My posts</div>
            <div className={classes.main__form}></div>
            <div className={classes.main__listofposts}>
               <div className={classes.main__listofpost}>1</div>
               <div className={classes.main__listofpost}>2</div>
               <div className={classes.main__listofpost}>3</div>
            </div>
         </div>
      </div>
   );
}

export default Main;
