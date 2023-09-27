import axios from "axios"
import type { AxiosRequestConfig, AxiosResponse } from "axios"
import type { Common } from "@/models/Common"

// 请求配置
const RequestOptions: AxiosRequestConfig = {
	baseURL: "https://blog.billson.club",
	headers: {
		"language": "zh_CN",
		"Content-Type": "application/json",
	},
	timeout: 30000,
	timeoutErrorMessage: "网络请求超时",
	withCredentials: true,
}

const axiosInstance = axios.create(RequestOptions)

axiosInstance.interceptors.request.use((config) => {
	return config
}, error => Promise.reject(error))

// 响应拦截
axiosInstance.interceptors.response.use(
	({ data, config = {} }) => {
		
		console.log("------------------------")
		console.log("- API   data ->", data)
		// console.log("- API   status ->", data.status)
		// console.log("- API   Url    ->", config.url)
		console.log("------------------------")
		
		return data
	},
	(error) => {
		console.log("API -> Error", error)
		return error
	}
)

export default async function request<T> (options: AxiosRequestConfig) {
	const axiosResponse = await axiosInstance(options)
	const { data, status, statusText } = axiosResponse as AxiosResponse<Common.ServiceResponse<T>>
	
	return data
}
