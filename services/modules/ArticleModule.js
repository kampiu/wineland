export const Service = {
	namespaced: "Article",
	api: {
		GetArticleList: ({ classify = "", tags = "", page = 1, limit = 20 }) => ({
			url: `/api/blog/v1/articles?classify=${ classify }&tags=${ tags }&page=${ page }&limit=${ limit }`,
			version: "",
			method: "GET"
		}),
	}
}
