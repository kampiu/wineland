/*
 * @module 获取文章里表
 */
import request from "../plugins/request"
import API from "./modules"

const service = {}

API.forEach(_item => {
	Object.entries(_item.api).forEach((_api) => {
		service[`${ _item.namespaced }/${ _api[0] }`] = (params = {}) => {
			const { method, url } = _api[1](params)
			
			return request({ method, url, params })
		}
	})
})

export default service
