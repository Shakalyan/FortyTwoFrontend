import axios from 'axios';
import {ACCESS_TOKEN, REFRESH_TOKEN} from "./Consts";

export const API_VERSION = "v1"
export const API_BASE_URL = `http://localhost:8080/${API_VERSION}`
const api_settings = {
    withCredentials: true,
    baseURL: API_BASE_URL
}

const api = axios.create(api_settings)
export const api_rejected = axios.create(api_settings)

const request_interceptor = (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN)
    if (token != null) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}

api.interceptors.request.use(request_interceptor)
api_rejected.interceptors.request.use(request_interceptor)

const response_reject_interceptor = async (error) => {
    const originalConfg = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalConfg._isRetry = true
        try {
            const response = await axios.post(`${API_BASE_URL}/jwt-auth/refresh`,
                {refreshToken: localStorage.getItem(REFRESH_TOKEN)})
            localStorage.setItem(ACCESS_TOKEN, response.data.accessToken)
            return api.request(originalConfg)
        } catch (e) {
            console.log("Not auth")
        }
    }
    return false
}

api.interceptors.response.use(config => config, response_reject_interceptor)
api_rejected.interceptors.response.use(config => config, async (error) => {
    const result = await response_reject_interceptor(error)
    if(result===false){
        throw new Error("Not 200")
    }
    return result
})

export default api