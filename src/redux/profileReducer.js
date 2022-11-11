import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


const initialState = {
   postsData: [
      { id: 2, post: 'Trying', likes: 4 },
      { id: 3, post: 'to create', likes: 2 },
      { id: 4, post: 'my first', likes: 6 },
      { id: 5, post: 'react app', likes: 12 },
      { id: 6, post: 'that is all', likes: 8 }
   ],
   profile: null,
   status: ''
}

const profileReducer = (state = initialState, action) => {
   const takeProfileId = () => {
      const list = state.postsData
      const lasdId = list[list.length - 1].id
      return lasdId
   }

   switch (action.type) {

      case ADD_POST:
         const lastId = takeProfileId()
         const newPost = { id: lastId + 1, post: action.newPost, likes: 0 }
         return {
            ...state,
            postsData: [...state.postsData, newPost],
         }
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            nextPostText: action.newText
         }
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         }
      case SET_STATUS:
         return {
            ...state,
            status: action.status
         }
      default: return state
   }
}

export const addPost = (text) => ({ type: ADD_POST, newPost: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })
export const setUserStatus = (status) => ({ type: SET_STATUS, status: status })
export const getUserProfile = (userId) => {
   return (dispatch) => {
      profileAPI.getProfile(userId)
         .then(response => {
            dispatch(setUserProfile(response.data))
         })
   }
}
export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getStatus(userId)
         .then(response =>
            dispatch(setUserStatus(response.data))
         )
   }
}
export const updateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status)
         .then(response => {
            if (response.data.resultCode === 0)
               dispatch(setUserStatus(status))
         })
   }
}
export default profileReducer