import React from 'react';
import DialogItem from './dialogItem/DialogItem';
import classes from './Dialogs.module.css';
import MessageItem from './messageItem/MessageItem';

const Dialogs = (props) => {
   const dialogsElements = props.dialogData.map(item => <DialogItem id={item.id} name={item.name} />)

   const messagesElements = props.messagesData.map(item => <MessageItem id={item.id} name={item.name} message={item.message} />)

   return (
      <div className={classes.main}>
         <div className={classes.dialogs__header}>Dialogs</div>
         <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs__item}>
               {dialogsElements}
            </div>
            <div className={classes.messages__item}>
               {messagesElements}
            </div>
         </div>
      </div>
   );
}

export default Dialogs;
