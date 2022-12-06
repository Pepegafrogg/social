import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import MessageItem from './messageItem/MessageItem';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../redux/dialogsReducer';
import { useForm } from "react-hook-form";



const Dialogs = (props) => {
   const dispatch = useDispatch()
   const { dialogData, messagesData } = useSelector(state => state.dialogPage)
   const { isLogin } = useSelector(state => state.auth)
   const dialogsElements = dialogData.map(item => <DialogItem id={item.id} name={item.name} key={item.id} />)
   const messagesElements = messagesData.map(item => <MessageItem id={item.id} name={item.name} message={item.message} key={item.id} />)


   const { register, handleSubmit, resetField } = useForm();
   const onSubmit = data => {
      dispatch(sendMessage(data.newMessage))
      resetField('newMessage')
   }

   if (!isLogin) return <Navigate to={'/login'} />
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <input placeholder='newMessage' {...register("newMessage")} />
                     <button >Send</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Dialogs;
