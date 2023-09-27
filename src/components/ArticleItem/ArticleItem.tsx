import React from "react"
import Image from "next/image"
import Link from "next/link"
import Tag from "./Tag"
import styles from "./ArticleItem.module.less"
import { Article } from "@/models/Article"

export interface ArticleItemProps {
	itemData: Article.Info
}

function ArticleItem({itemData}: ArticleItemProps) {
	
	return (
		<Link href={ `/article/${ itemData.id }` } className={ styles.articleItem } title={ itemData.title }>
			<div className={ styles.articleItemPoster }>
				<Image className={styles.articleItemImage} width={ 600 } height={ 400 } src={ itemData.poster } alt=""/>
			</div>
			<div className={ styles.articleItemWrapper }>
				<div className={ styles.box }>
					<div className={ styles.name }>{ itemData.title }</div>
					<div className={ styles.message }>{ itemData.describe }</div>
					<div className={ styles.tagList }>
						{
							itemData.tags.map(item => <Tag tag={ item } key={ item.id }/>)
						}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ArticleItem
