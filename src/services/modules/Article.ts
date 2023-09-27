import request from "@/utils/request"
import type { Article } from "@/models/Article"
import type { Services } from "@/models/Services"
import { BaseUrl } from "@/services/modules/Common"

/**
 * @description 获取文章列表
 * @param {string} classify 分类Id
 * @param {Array<string>} tags 标签Ids
 * @param {Common.PagerRequest["page]} page 查询页数
 * @param {Common.PagerRequest["limit]} limit 每页的大小
 * @return {Common.PagerResponse<Article.Info>} 文章列表
 */
const GetArticleList = async (
	{
		classify = "",
		tag = "",
		page = 1,
		limit = 20
	}: Services.GetArticleList): Promise<Article.Info> => {
	// const queryTags = tags && !isEmpty(tags) ? qs.stringify(tags) : ""
	const response = await fetch(BaseUrl + `/api/blog/v1/articles?classify=${ classify }&tags=${ tag }&page=${ page }&limit=${ limit }`, {
		method: "GET",
		cache: "force-cache"
	})
	const {data} = await response.json()
	
	return data.data
}

/**
 * @description 获取文章详情
 * @param {string} id 文章Id
 * @return {Article.Details} 文章详情
 */
const GetArticleDetail = async (id: string): Promise<Article.Details> => {
	const response = await fetch<Article.Details>(BaseUrl + `/api/blog/v1/article?id=${ id }`, {
		method: "GET",
		cache: "force-cache"
	})
	const {data} = await response.json()
	return data
}

export default {
	GetArticleList,
	GetArticleDetail
}
