import React from 'react';
import classes from './Header.module.css'

const Header = () => {
   return (
      <header className={classes.header}>
         <img style={{ width: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
      </header>
   );
}

export default Header;
