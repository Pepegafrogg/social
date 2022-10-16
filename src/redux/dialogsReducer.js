const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


const initialState = {
   dialogData: [
      { id: 1, name: 'Alexey' },
      { id: 2, name: 'Daniil' },
      { id: 3, name: 'Inna' },
      { id: 4, name: 'Mishael' },
      { id: 5, name: 'David' },
      { id: 6, name: 'Polina' },
   ],
   messagesData: [
      { id: 1, name: 'Pepega1', message: 'Hi, dear knight', },
      { id: 2, name: 'Pepega2', message: 'I am' },
      { id: 3, name: 'Pepega3', message: 'Pepega' },
      { id: 4, name: 'Pepega4', message: 'The frog' },
      { id: 5, name: 'Pepega5', message: 'I like ' },
      { id: 6, name: 'Pepega6', message: 'To do kwa' },
   ],
   newMessageBody: 'ddddddd'
}

const dialogsReducer = (state = initialState, action) => {
   const takeMessageId = () => {
      const list = state.messagesData
      const lasdId = list[list.length - 1].id
      return lasdId
   }

   if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      return {
         ...state,
         newMessageBody: action.newMessageText
      }
   } else if (action.type === SEND_MESSAGE) {
      const body = state.newMessageBody
      const lastId = takeMessageId()
      const newMessage = { id: lastId + 1, name: 'asd', message: body }
      return {
         ...state,
         newMessageBody: '',
         messagesData: [...state.messagesData, newMessage]
      }
   }

   return state
}


export const updateNewMessageActionCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_BODY,
      newMessageText: text
   }
}
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer