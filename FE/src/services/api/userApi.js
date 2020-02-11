import { axiosInstance } from './api'
import Vue from 'vue'

const baseUrl = '/users';

export default {
	getUserByUserName(username) {
    return axiosInstance.get(`${baseUrl}/${username}`)
	},
	
	isUserNameUnique(username) {
    return axiosInstance.get(`${baseUrl}/unique/${username}`)
	},

	getUserLoginState() {
    return axiosInstance.get(`${baseUrl}/current`)
	},

	createUser(userData) {
    const jsonData = JSON.stringify(userData)
    return axiosInstance.post(`${baseUrl}/`, jsonData)
	},

	logUserIn(loginData) {
		const jsonData = JSON.stringify(loginData)
    return axiosInstance.post(`${baseUrl}/status/login`, jsonData)
	},

	logUserOut() {
		return axiosInstance.patch(`${baseUrl}/status/logout`, null, {
			headers: {
				authorisation: Vue.$cookies.get('ssTok')
			}
		})
	},

	updateUser(userId, userData) {
    return axiosInstance.post(`${baseUrl}/${userId}`, userData)
	},

	deleteUser(userId) {
    return axiosInstance.delete(`${baseUrl}/${userId}`)
	}
}
