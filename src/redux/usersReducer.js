const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
   users: [
      { id: 1, avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg', friend: false, name: 'Alexey', status: 'Sad', location: { country: 'Belarus', city: 'Minsk' } },
      { id: 2, avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg', friend: true, name: 'Inna', status: 'Love', location: { country: 'Russia', city: 'Omsk' } },
      { id: 3, avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg', friend: false, name: 'Roman', status: 'Pretty', location: { country: 'Ukraine', city: 'Kiev' } },
      { id: 4, avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg', friend: true, name: 'Mishael', status: 'Study', location: { country: 'Russia', city: 'Sochi' } }
   ]
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         const stateCopy = {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, friend: true }
               }
               return u
            })
         }
         console.log(1)
         console.log(stateCopy)
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, friend: false }
               }
               return u
            })
         }
      case SET_USERS:
         return {
            ...state, users: [...state.users, ...action.users]
         }


      default: return state
   }


}


export const followAC = (userId) => {
   return {
      type: FOLLOW,
      userId: userId
   }
}
export const unFollowAC = (userId) => {
   return {
      type: UNFOLLOW,
      userId: userId
   }
}
export const setUsersAC = (users) => {
   return {
      type: SET_USERS,
      users: users
   }
}
export default dialogsReducer