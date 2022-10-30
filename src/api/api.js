import axios from "axios"

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'b917cbcf-35cd-47f9-8698-6f2ce62527ae',
   }
})

export const usersAPI = {
   getUsers: (currentPage = 1, pageSize = 10) => {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   },
   follow: (id) => {
      return instance.post(`follow/${id}`)
   },
   unFollow: (id) => {
      return instance.delete(`follow/${id}`)
   },
   getProfile: (userId) => {
      return instance.get(`profile/${userId}`)
   }
}
export const authAPI = {
   authMe: () => {
      return instance.get(`auth/me`)
   }
}