import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c16b1075-e569-4da7-b299-3e22b56b2867"
    }
})

export const userAPI = {
    getUser(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    getUserProfile(userId) {
        console.warn("please use profileAPI")
        profileAPI.getUserProfile(userId)
    },
    getOnPageChangeUSer(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },
    followAPI(userID) {
        return instance
            .post(`follow/${userID}`).then(response => response.data)
    },
    unfollowAPI(userID) {
        return instance
            .delete(`follow/${userID}`).then(response => response.data)
    }

}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    }

}
export const authAPI = {
    getLogin() {
        return instance.get(`auth/me`).then(response => response.data)
    } ,
    login(email,password) {
        return instance.post(`auth/login`,{email,password})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
