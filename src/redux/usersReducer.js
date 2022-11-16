import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_CLICKED = 'TOGGLE_IS_CLICKED'

const initialState = {
   users: [],
   pageSize: 5,
   totalCount: 0,
   currentPage: 1,
   isFetching: true,
   isClicked: []
}
const dialogsReducer = (state = initialState, action) => {
   let stateCopy;
   switch (action.type) {
      case FOLLOW:
         stateCopy = {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u
            })
         }
         return stateCopy
      case UNFOLLOW:
         stateCopy = {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u
            })
         }
         return stateCopy
      case SET_USERS:
         stateCopy = {
            ...state, users: action.users
         }
         return stateCopy
      case SET_CURRENT_PAGE:
         stateCopy = {
            ...state,
            currentPage: action.page
         }
         return stateCopy
      case SET_TOTAL_COUNT:
         stateCopy = {
            ...state,
            totalCount: action.count
         }
         return stateCopy
      case TOGGLE_IS_FETCHING:
         stateCopy = {
            ...state,
            isFetching: action.isFetching
         }
         return stateCopy
      case TOGGLE_IS_CLICKED:
         stateCopy = {
            ...state,
            isClicked: action.isClicked
               ? [...state.isClicked, action.userId]
               : state.isClicked.filter(id => id !== action.userId)
         }
         return stateCopy
      default: return state
   }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count })
export const setFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setClicked = (isClicked, userId) => ({ type: TOGGLE_IS_CLICKED, isClicked, userId })
export const requestUsersTC = (page, pageSize) => {
   return (dispatch) => {
      dispatch(setFetching(true))
      usersAPI.getUsers(page, pageSize)
         .then(data => {
            dispatch(setFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
         })
   }
}
export const followTC = (userId) => {
   return (dispatch) => {
      dispatch(setClicked(true, userId))
      usersAPI.follow(userId)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(followSuccess(userId))
               dispatch(setClicked(false, userId))
            }
         })
   }
}
export const unFollowTC = (userId) => {
   return (dispatch) => {
      dispatch(setClicked(true, userId))
      usersAPI.unFollow(userId)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(unFollowSuccess(userId))
               dispatch(setClicked(false, userId))
            }
         })
   }
}
export default dialogsReducer