import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../components/common/objectHelpers/objectHelpers";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_CLICKED = 'users/TOGGLE_IS_CLICKED'

const initialState = {
   users: [],
   pageSize: 5,
   totalCount: 0,
   currentPage: 1,
   isFetching: true,
   isClicked: []
}
const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
         }
      case SET_USERS:
         return {
            ...state, users: action.users
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.page
         }
      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalCount: action.count
         }
      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching
         }
      case TOGGLE_IS_CLICKED:
         return {
            ...state,
            isClicked: action.isClicked
               ? [...state.isClicked, action.userId]
               : state.isClicked.filter(id => id !== action.userId)
         }
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
export const requestUsersTC = (page, pageSize) => async (dispatch) => {
   dispatch(setFetching(true))
   const data = await usersAPI.getUsers(page, pageSize)
   dispatch(setFetching(false))
   dispatch(setUsers(data.items))
   dispatch(setTotalCount(data.totalCount))

}
const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
   dispatch(setClicked(true, userId))
   const response = await apiMethod(userId)
   if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId))
      dispatch(setClicked(false, userId))
   }
}
export const followTC = (userId) => async (dispatch) => {
   followUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}
export const unFollowTC = (userId) => async (dispatch) => {
   followUnfollow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess)
}

export default dialogsReducer