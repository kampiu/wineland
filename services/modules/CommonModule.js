export const Service = {
	namespaced: "Common",
	api: {
		/*
		 * @module 获取全局配置项
		 */
		GetCommonSettings: () => ({
			url: `/api/blog/v1/settings`,
			version: "",
			method: "GET"
		}),
		/*
		 * @module 获取首页聚合数据
		 */
		GetHomeAggregateData: () => ({
			url: `/api/blog/v1/home`,
			version: "",
			method: "GET"
		}),
	}
}
