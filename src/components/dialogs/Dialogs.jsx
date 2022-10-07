import React from 'react';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/state';
import DialogItem from './dialogItem/DialogItem';
import classes from './Dialogs.module.css';
import MessageItem from './messageItem/MessageItem';

const Dialogs = (props) => {
   const dialogsElements = props.state.dialogData.map(item => <DialogItem id={item.id} name={item.name} key={item.id} />)

   const messagesElements = props.state.messagesData.map(item => <MessageItem id={item.id} name={item.name} message={item.message} key={item.id} />)

   const sendMessage = () => {
      props.dispatch(sendMessageActionCreator())
   }

   const onMessageChange = (e) => {
      const text = e.target.value
      props.dispatch(updateNewMessageActionCreator(text))
   }


   return (
      <div className={classes.main}>
         <div className={classes.dialogs__header}>Dialogs</div>
         <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs__item}>
               {dialogsElements}
            </div>
            <div className={classes.messages__item}>
               <div> {messagesElements}</div>
               <div>
                  <div>
                     <textarea
                        value={props.state.newMessageBody}
                        placeholder='Enter your message'
                        onChange={onMessageChange} >
                     </textarea>
                  </div>
                  <div>
                     <button onClick={sendMessage} >Send</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Dialogs;
