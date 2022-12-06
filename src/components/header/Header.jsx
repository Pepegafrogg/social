import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authReducer';

const Header = (props) => {
   const dispatch = useDispatch()
   const { isLogin } = useSelector(state => state.auth)

   return (
      <header className={classes.header}>
         <img style={{ width: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />

         {isLogin
            ? <div className={classes.login}> <button onClick={() => dispatch(logout())}>Log out</button> </div>
            : <div className={classes.login}> <NavLink to={`/login`}>Login </NavLink> </div>
         }

      </header>
   );
}

export default Header;
