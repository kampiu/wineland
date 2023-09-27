/** 文章描述 */
export namespace Article {
	/** 文章信息 */
	export interface Info {
		id: string
		/** 标题 */
		title: string
		/** 描述 */
		describe: string
		/** 海报 */
		poster: string
		/** 作者 */
		author: null | any
		/** 点赞次数 */
		points: number
		/** 浏览次数 */
		browse_times: number
		/** 创建时间 */
		created_at: string
		/** 标签 */
		tags: Array<Tag>
		/** 分类 */
		classify: Array<Classify>
	}
	
	/** 文章详情 */
	export interface Details extends Info {
		/** markdown 内容 */
		content_md: string
		/** 文章关键词 */
		keyword?: string
	}
	
	/** 文章标签 */
	export interface Tag {
		/** 标签ID */
		id: string
		/** 标签名称 */
		name: string
		tag_name?: string
		/** 标签描述 */
		describe: null | string
		tag_describe?: string
		/** 标签图标 */
		poster: string
		tag_poster?: string
	}
	
	/** 文章分类*/
	export interface Classify {
		/** 分类ID */
		id: string
		/** 分类名称 */
		classify_name: string
		/** 分类描述 */
		classify_describe: null | string
		/** 分类图标 */
		classify_poster: string
	}
	
	/** 文章专题（会有专题详情、列表） */
	export interface Special {
		/** 专题ID */
		id: string
		/** 专题名称 */
		title: string
		/** 专题描述 */
		describe: string
		/** 专题海报 */
		poster: string
		/** 创建时间 */
		created_at: string
		/** 文章数量 */
		articles: number
	}
}
