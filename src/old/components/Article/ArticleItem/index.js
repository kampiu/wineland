import React from "react"
import Image from "next/image"
import Link from "next/link"
import Tag from "./components/Tag"
import ArticleItemStyle from "./style"

function ArticleItem ({ itemData = {}, ...props }) {
	
	return (
		<>
			<ArticleItemStyle title={ itemData.title }>
				<div className="poster">
					<Image width={ 600 } height={ 400 } src={ itemData.poster }/>
				</div>
				<Link href={ `/article/${ itemData.id }` }>
					<div className="box">
						<div className="name">{ itemData.title }</div>
						<div className="message">{ itemData.describe }</div>
						<div className="tag-list">
							{
								itemData.tags.map(item => <Tag tag={ item } key={ item.id }/>)
							}
						</div>
					</div>
				</Link>
			</ArticleItemStyle>
		</>
	)
}

export default ArticleItem
