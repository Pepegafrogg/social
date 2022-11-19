import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import navFriendsReducer from "./navFriendsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";
import { compose } from 'redux';


const reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogsReducer,
   navFriends: navFriendsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer,
   form: formReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store