import { cache } from "react"
import request from "@/utils/request"
import type { Article } from "@/models/Article"
import type { Settings } from "@/models/Settings"

export const BaseUrl = "https://blog.billson.club"

const GetCommonSettings = async (): Promise<Settings.Details> => {
	const response = await fetch(BaseUrl + `/api/blog/v1/settings`, {
		method: "GET",
		cache: "force-cache"
	})
	
	const {data} = await response.json()
	return data
}

interface GetHomeAggregateDataResponse {
	articles: Array<Article.Info>
	special: Array<Article.Special>
}

const GetHomeAggregateData = async (): Promise<GetHomeAggregateDataResponse> => {
	const response = await fetch(BaseUrl + `/api/blog/v1/home`, {
		method: "GET",
		cache: "force-cache"
	})
	
	const {data} = await response.json()
	return data
}

export default {
	GetCommonSettings,
	GetHomeAggregateData
}
