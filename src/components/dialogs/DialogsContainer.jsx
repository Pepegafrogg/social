import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogPage.dialogData,
      messages: state.dialogPage.messagesData,
      newMessageBody: state.dialogPage.messagesData.newMessageBody
   }

}
const mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(sendMessageActionCreator())
      },
      onMessageChange: (text) => {
         const action = updateNewMessageActionCreator(text)
         dispatch(action)
      }
   }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
