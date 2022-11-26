import { stopSubmit } from "redux-form"
import { authAPI, securityAPI } from "../api/api"

const SET_USER_DATA = 'auth/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/SET_CAPTCHA_URL_SUCCESS'


const initialState = {
   userId: null,
   email: null,
   login: null,
   isLogin: false,
   captchaUrl: null
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return { ...state, ...action.payload, }
      case GET_CAPTCHA_URL_SUCCESS:
         return { ...state, ...action.payload }
      default:
         return state
   }


}
export const setAuthUserData = (userId, email, login, isLogin) => ({ type: SET_USER_DATA, payload: { userId, email, login, isLogin } })
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })
export const getAuth = () => async (dispatch) => {
   const response = await authAPI.authMe()
   if (response.data.resultCode === 0) {
      const { id, login, email } = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
   }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
   const response = await authAPI.authLogin(email, password, rememberMe, captcha)
   if (response.data.resultCode === 0) {
      dispatch(getAuth())
   } else {
      if (response.data.resultCode === 10) {
         dispatch(getCaptchaUrl())
      }
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
export const getCaptchaUrl = () => async (dispatch) => {
   const response = await securityAPI.getCaptcha()
   const captchaUrl = response.data.url
   dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export default authReducer