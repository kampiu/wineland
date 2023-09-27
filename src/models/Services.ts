import { Common } from "./Common"

export namespace Services {
	
	export interface GetArticleList extends Common.PagerRequest{
		/** 分类 */
		classify?: string
		/** 标签 */
		tag?: string
	}
	
}
