export const Service = {
	namespaced: "Article",
	api: {
		/*
		 * @module 获取文章里表
		 * @param {string} classify - 文章分类
		 * @param {string} classify - 文章分类
		 * @param {number} page - 文章分类
		 * @param {string} classify - 文章分类
		 */
		GetArticleList: ({ classify = "", tags = "", page = 1, limit = 20 }) => ({
			url: `/api/blog/v1/articles?classify=${ classify }&tags=${ tags }&page=${ page }&limit=${ limit }`,
			version: "",
			method: "GET"
		}),
	}
}
