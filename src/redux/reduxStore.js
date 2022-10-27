import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import navFriendsReducer from "./navFriendsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";



const reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogsReducer,
   navFriends: navFriendsReducer,
   usersPage: usersReducer,
   auth: authReducer,

})

const store = createStore(reducers)
window.store = store

export default store