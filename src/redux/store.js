import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

let reRender = () => {
   console.log(123)
}

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
   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)

      reRender(this._state)
   }

}


export default store