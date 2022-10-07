let reRender = () => {
   console.log(123)
}
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


const store = {
   _state: {
      profilePage: {
         postsData: [
            { id: 2, post: 'Trying', likes: 4 },
            { id: 3, post: 'to create', likes: 2 },
            { id: 4, post: 'my first', likes: 6 },
            { id: 5, post: 'react app', likes: 12 },
            { id: 6, post: 'that is all', likes: 8 }
         ],
         nextPostText: 'asd'
      },
      dialogPage: {
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
      },
      navFriends: {
         friendsData: [
            { id: 1, name: 'Alexey' },
            { id: 2, name: 'Maxim' },
            { id: 3, name: 'Vladimir' },
         ]
      }
   },
   getState() {
      return this._state
   },
   subscribe(observer) {
      reRender = observer
   },
   takePostId() {
      const list = this._state.profilePage.postsData
      const lasdId = list[list.length - 1].id
      return lasdId
   },
   takeMessageId() {
      const list = this._state.dialogPage.messagesData
      const lasdId = list[list.length - 1].id
      return lasdId
   },
   dispatch(action) {
      if (action.type === ADD_POST) {
         const lastId = this.takePostId()
         const newPost = { id: lastId + 1, post: store._state.profilePage.nextPostText, likes: 0 }
         this._state.profilePage.postsData.push(newPost)
         this._state.profilePage.nextPostText = ''
         reRender(this._state)
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.nextPostText = action.newText
         reRender(this._state)
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
         this._state.dialogPage.newMessageBody = action.newMessageText
         reRender(this._state)
      } else if (action.type === SEND_MESSAGE) {
         const lastId = this.takeMessageId()
         const body = this._state.dialogPage.newMessageBody
         this._state.dialogPage.newMessageBody = ''
         const newMessage = { id: lastId + 1, name: 'asd', message: body }
         this._state.dialogPage.messagesData.push(newMessage)
         reRender(this._state)
      }
   }

}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}
export const updateNewMessageActionCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_BODY,
      newMessageText: text
   }
}
export const sendMessageActionCreator = (text) => ({ type: SEND_MESSAGE })
export default store