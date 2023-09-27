import type { Article } from "./Article"

/** 设置描述 */
export namespace Settings {
	
	/** 联系方式 */
	export interface Contact {
		id: string
		title: string
		icon: string
		link: null | string
	}
	
	/** 友情链接 */
	export interface Link {
		id: string
		title: string
		links: Array<LinkInfo>
	}
	
	/** 友情链接信息 */
	export interface LinkInfo {
		id: string
		title: string
		url: string
		logo: string
		describe: string
		created_at: string
	}
	
	/** 社交信息 */
	export interface Details {
		/** 全部标签 */
		tags: Array<Article.Tag>
		/** 全部分类 */
		classify: Array<Article.Classify>
		/** 备案信息 */
		copyright: string
		/** 友情链接 */
		link: Array<Link>
		/** 联系方式 */
		contact: Array<Contact>
	}
}
