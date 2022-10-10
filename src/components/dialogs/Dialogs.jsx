import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {

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
               {props.dialogsElements}
            </div>
            <div className={classes.messages__item}>
               <div> {props.messagesElements}</div>
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
