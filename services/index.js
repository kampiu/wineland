/*
 * @Author: KAM
 * @Date: 2019-11-09 11:55:19
 * @LastEditTime: 2019-12-04 15:04:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
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
