import { getAuth } from "./authReducer"

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
   initialized: false
}
const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_INITIALIZED:
         return {
            ...state,
            initialized: true
         }
      default:
         return state

   }
}

export const initializedSucces = () => ({ type: SET_INITIALIZED })
export const initializeApp = () => async (dispatch) => {
   await dispatch(getAuth())
   dispatch(initializedSucces())

}

export default appReducer