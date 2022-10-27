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
            ...action.data,
            isLogin: true,
         }

      default:
         return state
   }


}


export const setAuthUserData = (userId, email, login) => {
   return {
      type: SET_USER_DATA,
      data: { userId, email, login }
   }
}

export default authReducer