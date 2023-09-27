import React from "react"
import styles from "./NavigationMenu.module.less"
import { useRouter } from "next/router"
import clsx from "clsx"
import { Article } from "@/models/Article"

export interface NavigationMenuProps {
	tags: Array<Article.Tag>
}

function NavigationMenu({tags = []}: NavigationMenuProps) {
	
	const Router = useRouter()
	
	return (
		<div className={ styles.navigationMenu }>
			<div className={ styles.navigationMenuItem }>
				<div className={ styles.title }>笔记分类</div>
				<div className={ styles.main }>
					{
						tags.map(item => (
							<a
								key={ item.id }
								onClick={ () => Router.push(`/articles?tag=${ item.id }`) }
								className={ clsx(styles.link, {
									[styles.active]: (Router.query?.tag || "") === item.id
								}) }
							>
								{ item.name }
							</a>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default NavigationMenu
