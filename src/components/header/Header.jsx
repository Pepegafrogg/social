import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = (props) => {
   return (
      <header className={classes.header}>
         <img style={{ width: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />

         {props.isLogin
            ? <div className={classes.login}> <button onClick={props.logout}>Log out</button> </div>
            : <div className={classes.login}> <NavLink to={`/login`}>Login </NavLink> </div>
         }

      </header>
   );
}

export default Header;
