const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


// { id: 1, avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg', followed: false, name: 'Alexey', status: 'Sad', location: { country: 'Belarus', city: 'Minsk' } },
//       { id: 2, avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg', followed: false, name: 'Inna', status: 'Love', location: { country: 'Russia', city: 'Omsk' } },
//       { id: 3, avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg', followed: false, name: 'Roman', status: 'Pretty', location: { country: 'Ukraine', city: 'Kiev' } },
//       { id: 4, avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg', followed: true, name: 'Mishael', status: 'Study', location: { country: 'Russia', city: 'Sochi' } }

const initialState = {
   users: [],
   pageSize: 5,
   totalCount: 0,
   currentPage: 1,
   isFetching: true
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

      default: return state
   }
}

export const follow = (userId) => {
   return {
      type: FOLLOW,
      userId: userId
   }
}
export const unFollow = (userId) => {
   return {
      type: UNFOLLOW,
      userId: userId
   }
}
export const setUsers = (users) => {
   return {
      type: SET_USERS,
      users: users
   }
}
export const setCurrentPage = (page) => {
   return {
      type: SET_CURRENT_PAGE,
      page: page
   }
}
export const setTotalCount = (count) => {
   return {
      type: SET_TOTAL_COUNT,
      count: count
   }
}
export const setFetching = (isFetching) => {
   return {
      type: TOGGLE_IS_FETCHING,
      isFetching: isFetching
   }
}
export default dialogsReducer