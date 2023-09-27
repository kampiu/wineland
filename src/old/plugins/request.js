import axios from "axios"

// 请求配置
const RequestOptions = {
	baseURL: process.env.NEXT_PUBLIC_API,
	headers: {
		"language": "zh_CN",
		"Content-Type": "application/json",
	},
	timeout: 30000,
	timeoutErrorMessage: "网络请求超时",
	withCredentials: true,
}

const Request = axios.create(RequestOptions)

Request.interceptors.request.use((config) => {
	
	return config
}, error => Promise.reject(error))

// 响应拦截
Request.interceptors.response.use(
	({ data, config = {}, method }) => {
		
		// console.log("------------------------")
		// console.log("- API   status ->", data.status)
		// console.log("- API   Url    ->", config.url)
		// console.log("------------------------")
		
		return data
	},
	(error) => {
		console.log("API -> Error", error)
		return error
	}
)

export default Request
