import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'auth/SET-USER-DATA'


const initialState = {
   userId: null,
   email: null,
   login: null,
   isLogin: false,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.payload,
         }

      default:
         return state
   }


}
export const setAuthUserData = (userId, email, login, isLogin) => ({ type: SET_USER_DATA, payload: { userId, email, login, isLogin } })
export const getAuth = () => async (dispatch) => {
   const response = await authAPI.authMe()
   if (response.data.resultCode === 0) {
      const { id, login, email } = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
   }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
   const response = await authAPI.authLogin(email, password, rememberMe)
   if (response.data.resultCode === 0) {
      dispatch(getAuth())
   } else {
      const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', { _error: message }))
   }
}
export const logout = () => async (dispatch) => {
   const response = await authAPI.authLogout()
   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))

   }
}
export default authReducer