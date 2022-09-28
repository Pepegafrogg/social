import React from 'react';
import DialogItem from './dialogItem/DialogItem';
import classes from './Dialogs.module.css';
import MessageItem from './messageItem/MessageItem';

const Dialogs = () => {
   const dialogData = [{ id: 1, name: 'Alexey' }, { id: 2, name: 'Daniil' }, { id: 3, name: 'Inna' }, { id: 4, name: 'Mishael' }, { id: 5, name: 'Dadid' }, { id: 6, name: 'Polina' },]
   const messagesData = [
      { id: 1, name: 'Pepega1', message: 'Hi, dear knight', },
      { id: 2, name: 'Pepega2', message: 'I am' },
      { id: 3, name: 'Pepega3', message: 'Pepega' },
      { id: 4, name: 'Pepega4', message: 'The frog' },
      { id: 5, name: 'Pepega5', message: 'I like ' },
      { id: 6, name: 'Pepega6', message: 'To do kwa' },
   ]
   return (
      <div className={classes.main}>
         <div className={classes.dialogs__header}>Dialogs</div>
         <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs__item}>
               <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
               <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
               <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
               <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
               <DialogItem name={dialogData[4].name} id={dialogData[4].id} />
            </div>
            <div className={classes.messages__item}>
               <MessageItem id={messagesData[0].id} name={messagesData[0].name} message={messagesData[0].message} />
               <MessageItem id={messagesData[1].id} name={messagesData[1].name} message={messagesData[1].message} />
               <MessageItem id={messagesData[2].id} name={messagesData[2].name} message={messagesData[2].message} />
               <MessageItem id={messagesData[3].id} name={messagesData[3].name} message={messagesData[3].message} />
            </div>
         </div>
      </div>
   );
}

export default Dialogs;
