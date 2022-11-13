import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { sendMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogPage.dialogData,
      messages: state.dialogPage.messagesData,
      newMessageBody: state.dialogPage.messagesData.newMessageBody,
      isLogin: state.auth.isLogin
   }
}
const mapDispatchToProps = { sendMessage }

const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)

export default DialogsContainer;
