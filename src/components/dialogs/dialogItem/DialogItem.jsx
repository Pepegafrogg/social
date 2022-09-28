import React from 'react';
import { NavLink, Route, Router } from 'react-router-dom';
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
   return (
      <div className={classes.companion}>
         <NavLink to={`/messages/${props.id}`}
            className={navData => navData.isActive ? classes.active : classes.item}
         >
            {props.name}
         </NavLink>
      </div>
   );
}

export default DialogItem;
