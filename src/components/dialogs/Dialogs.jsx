import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import MessageItem from './messageItem/MessageItem';

const Dialogs = (props) => {
   const dialogsElements = props.dialogs.map(item => <DialogItem id={item.id} name={item.name} key={item.id} />)
   const messagesElements = props.messages.map(item => <MessageItem id={item.id} name={item.name} message={item.message} key={item.id} />)

   const sendMessage = () => {
      props.sendMessage()
   }

   const onMessageChangeValue = (e) => {
      const text = e.target.value
      props.onMessageChange(text)
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
                        value={props.newMessageBody}
                        placeholder='Enter your message'
                        onChange={onMessageChangeValue} >
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
