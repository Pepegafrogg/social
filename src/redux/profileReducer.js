import { stopSubmit } from "redux-form"
import { profileAPI } from "../api/api"

const ADD_POST = 'profile/ADD-POST'
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'


const initialState = {
   postsData: [
      { id: 2, post: 'Trying', likes: 4 },
      { id: 3, post: 'to create', likes: 2 },
      { id: 4, post: 'my first', likes: 6 },
      { id: 5, post: 'react app', likes: 12 },
      { id: 6, post: 'that is all', likes: 8 }
   ], profile: null,
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
         return { ...state, postsData: [...state.postsData, newPost], }

      case UPDATE_NEW_POST_TEXT:
         return { ...state, nextPostText: action.newText }

      case SET_USER_PROFILE:
         return { ...state, profile: action.profile }

      case SET_STATUS:
         return { ...state, status: action.status }

      case SAVE_PHOTO_SUCCESS:
         return { ...state, profile: { ...state.profile, photos: action.photos } }
      default: return state
   }
}

export const addPost = (text) => ({ type: ADD_POST, newPost: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })
export const setUserStatus = (status) => ({ type: SET_STATUS, status: status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
export const getUserProfile = (userId) => async (dispatch) => {
   const response = await profileAPI.getProfile(userId)
   dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
   const response = await profileAPI.getStatus(userId)
   dispatch(setUserStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
   const response = await profileAPI.updateStatus(status)
   if (response.data.resultCode === 0)
      dispatch(setUserStatus(status))
}
export const savePhoto = (file) => async (dispatch) => {
   const response = await profileAPI.savePhoto(file)
   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos))
   }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
   const userId = getState().auth.userId
   const response = await profileAPI.saveProfile(profile)
   if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId))
   } else {
      const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
      dispatch(stopSubmit('editProfile', { _error: message }))
      return Promise.reject(response.data.messages[0])
   }
}
export default profileReducer