import React from 'react';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import DialogItem from './dialogItem/DialogItem';
import Dialogs from './Dialogs';
import classes from './Dialogs.module.css';
import MessageItem from './messageItem/MessageItem';

const DialogsContainer = (props) => {
   const dialogsElements = props.store.dialogPage.dialogData.map(item => <DialogItem id={item.id} name={item.name} key={item.id} />)

   const messagesElements = props.store.dialogPage.messagesData.map(item => <MessageItem id={item.id} name={item.name} message={item.message} key={item.id} />)

   const newMessageBody = props.store.newMessageBody

   const sendMessage = () => {
      props.dispatch(sendMessageActionCreator())
   }

   const onMessageChange = (text) => {
      const action = updateNewMessageActionCreator(text)
      props.dispatch(action)
   }


   return (
      <Dialogs sendMessage={sendMessage}
         onMessageChange={onMessageChange}
         dialogsElements={dialogsElements}
         messagesElements={messagesElements}
         newMessageBody={newMessageBody}
      />
   );
}

export default DialogsContainer;
