import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogPage.dialogData,
      messages: state.dialogPage.messagesData,
      newMessageBody: state.dialogPage.messagesData.newMessageBody,
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

const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)

export default DialogsContainer;
