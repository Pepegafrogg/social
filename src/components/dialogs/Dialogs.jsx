import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import MessageItem from './messageItem/MessageItem';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const DialogsForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <Field component={'textarea'} name={'newMessage'} value={props.newMessageBody} placeholder='Enter your message'> </Field>
         <div> <button>Send</button> </div>
      </form>
   )
}

const DialogsReduxForm = reduxForm({ form: 'Message' })(DialogsForm)

const Dialogs = (props) => {
   const dialogsElements = props.dialogs.map(item => <DialogItem id={item.id} name={item.name} key={item.id} />)
   const messagesElements = props.messages.map(item => <MessageItem id={item.id} name={item.name} message={item.message} key={item.id} />)

   const sendMessage = (formData) => {
      props.sendMessage(formData.newMessage)
   }
   if (!props.isLogin) return <Navigate to={'/login'} />
   return (
      <div className={classes.main}>
         <div className={classes.dialogs__header}>Dialogs</div>
         <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs__item}>
               {dialogsElements}
            </div>
            <div className={classes.messages__item}>
               <div> {messagesElements}</div>
               <div className='123'>
                  <DialogsReduxForm onSubmit={sendMessage} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Dialogs;
