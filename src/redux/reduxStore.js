import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import navFriendsReducer from "./navFriendsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogsReducer,
   navFriends: navFriendsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store