const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {
   const takeMessageId = () => {
      const list = state.messagesData
      const lasdId = list[list.length - 1].id
      return lasdId
   }
   if (action.type === SEND_MESSAGE) {
      const lastId = takeMessageId()
      const newMessage = { id: lastId + 1, name: `Pepega${lastId + 1}`, message: action.newMessageText }
      return {
         ...state,
         messagesData: [...state.messagesData, newMessage]
      }
   }
   return state
}
export const sendMessage = (text) => ({ type: SEND_MESSAGE, newMessageText: text })

export default dialogsReducer