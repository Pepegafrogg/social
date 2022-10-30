import { usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


const initialState = {
   postsData: [
      { id: 2, post: 'Trying', likes: 4 },
      { id: 3, post: 'to create', likes: 2 },
      { id: 4, post: 'my first', likes: 6 },
      { id: 5, post: 'react app', likes: 12 },
      { id: 6, post: 'that is all', likes: 8 }
   ],
   nextPostText: 'asasdd',
   profile: null,
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
         const newPost = { id: lastId + 1, post: state.nextPostText, likes: 0 }
         return {
            ...state,
            nextPostText: '',
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
      default: return state
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })
export const getUserProfile = (userId) => {
   return (dispatch) => {
      usersAPI.getProfile(userId)
         .then(response => {
            dispatch(setUserProfile(response.data))
         })
   }
}

export default profileReducer