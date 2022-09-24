import React from 'react';
import classes from './Nav.module.css'

const Nav = () => {
   return (
      <nav className={classes.nav}>
         <div className={classes.nav__item}>1</div>
         <div className={classes.nav__item}>2</div>
         <div className={classes.nav__item}>3</div>
         <div className={classes.nav__item}>4</div>
         <div className={classes.nav__item}>5</div>
      </nav>
   );
}

export default Nav;
