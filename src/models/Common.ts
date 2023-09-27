/** 公用描述 */
export namespace Common {
	/** 分页请求 */
	export interface PagerRequest {
		/** 页数 */
		page?: number
		/** 每页的大小 */
		limit?: number
	}
	
	/** 分页返回 */
	export interface PagerResponse<T> {
		/** 当前所在页 */
		current_page: number
		/** 最后一页 */
		last_page: number
		/** 数据总数 */
		total: number
		/** 返回的数据体 */
		data: T
	}
	
	/* 服务响应的数据格式 */
	export interface ServiceResponse<T extends unknown> {
		/** 伪状态码 */
		status: number
		/** 返回的数据 */
		data: T
		/** 服务消息 */
		message: string
	}
}
