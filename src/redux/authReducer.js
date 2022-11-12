import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET-USER-DATA'


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
export const getAuth = () => {
   return (dispatch) => {
      authAPI.authMe()
         .then(response => {
            if (response.data.resultCode === 0) {
               const { id, login, email } = response.data.data
               dispatch(setAuthUserData(id, email, login, true))
            }
         })
   }
}
export const login = (email, password, rememberMe) => (dispatch) => {
   authAPI.authLogin(email, password, rememberMe)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(getAuth())
         }
      })
}
export const logout = () => (dispatch) => {
   authAPI.authLogout()
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
         }
      })
}
export default authReducer