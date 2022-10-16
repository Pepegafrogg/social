import React from 'react';
import FriendsContainer from './friends/FriendsContainer';
import classes from './Nav.module.css'
import NavItem from './navItem/NavItem';

const Nav = () => {
   return (
      <div className={classes.nav}>
         <NavItem value={'/Profile'} />
         <NavItem value={'/Messages'} />
         <NavItem value={'/Users'} />
         <NavItem value={'/News'} />
         <NavItem value={'/Music'} />
         <NavItem value={'/Settings'} />
         <FriendsContainer />
      </div>
   );
}

export default Nav;
