import React, { Component } from "react"
import Image from "next/image"
import styles from "./Tag.module.less"
import { Article } from "@/models/Article"

export interface TagProps {
	tag: Article.Tag
}

function Tag({tag}: TagProps) {
	
	return (
		<div className={ styles.tag }>
			<Image className={styles.tagIcon} width={ 20 } height={ 20 } src={ tag.tag_poster || "" } alt="" quality={ 50 } loading="lazy"/>
			<span className={styles.tagLabel}>{ tag.tag_name }</span>
		</div>
	)
}

export default Tag
