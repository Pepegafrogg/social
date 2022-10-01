import React from 'react';
import Friends from './friends/Friends';
import classes from './Nav.module.css'
import NavItem from './navItem/NavItem';

const Nav = (props) => {
   return (
      <div className={classes.nav}>
         <NavItem value={'/Profile'} />
         <NavItem value={'/Messages'} />
         <NavItem value={'/News'} />
         <NavItem value={'/Music'} />
         <NavItem value={'/Settings'} />
         <Friends state={props.state} />
      </div>
   );
}

export default Nav;
