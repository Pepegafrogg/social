import React from 'react';
import classes from './Header.module.css'

const Header = () => {
   return (
      <div className={classes.header}>
         <img className={classes.header__img} src="http://green-forest36.ru/wp-content/uploads/2020/04/2-1.jpg" alt="" />
      </div>
   );
}

export default Header;
