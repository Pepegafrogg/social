import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import navFriendsReducer from "./navFriendsReducer";
import profileReducer from "./profileReducer";



const reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogsReducer,
   navFriends: navFriendsReducer
})

const store = createStore(reducers)
window.store = store

export default store