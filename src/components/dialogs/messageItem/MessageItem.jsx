import React from 'react';
import classes from './MessageItem.module.css';

const MessageItem = (props) => {
   return (
      <div className={classes.companion}>
         <div className={classes.companionInfo}>
            <div className={classes.avatar}></div>
            <div className={classes.companionName}>
               {props.name}
            </div>
         </div>
         <div className={classes.companionMessages}>
            {props.message}
         </div>

      </div>
   );
}

export default MessageItem;
