import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css'

const NavItem = (props) => {
   return (
      <div className={classes.item}>
         <NavLink to={props.value}
            className={navData => navData.isActive ? classes.active : classes.item}>
            {props.value.slice(1)}
         </NavLink>

      </div>
   );
}

export default NavItem;
