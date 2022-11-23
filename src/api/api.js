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
         .then(response => (response.data))
   },
   follow: (id) => {
      return instance.post(`follow/${id}`)
   },
   unFollow: (id) => {
      return instance.delete(`follow/${id}`)
   },
   getProfile: (userId) => {
      console.warn('old method')
      return profileAPI.getProfile(userId)
   }


}
export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`)
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`)
   },
   updateStatus(status) {
      return instance.put(`profile/status`, { status: status })
   },
   savePhoto(photoFile) {
      const formData = new FormData()
      formData.append('image', photoFile)
      return instance.put(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
   },
   saveProfile(profile) {
      return instance.put(`profile`, profile)
   }
}

export const authAPI = {
   authMe: () => {
      return instance.get(`auth/me`)
   },
   authLogin: (email, password, rememberMe = false) => {
      return instance.post(`auth/login`, { email, password, rememberMe })
   },
   authLogout: () => {
      return instance.delete(`auth/login`)
   }
}