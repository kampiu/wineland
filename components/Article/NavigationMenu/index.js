import React, { Component } from "react"
import NavigationMenuStyle from "./style"
import { useRouter } from "next/router"

function NavigationMenu ({ tags = [] }) {
	
	const Router = useRouter()
	
	return (
		<>
			<NavigationMenuStyle>
				<div className="navigation-item">
					<div className="title">笔记分类</div>
					<div className="main">
						{
							tags.map(item => (
								<a className={ (Router.query?.tag || "") === item.id ? "active" : "" } onClick={ () => Router.push(`/articles?tag=${ item.id }`) }
								   key={ item.id }>{ item.name }</a>
							))
						}
					</div>
				</div>
			</NavigationMenuStyle>
		</>
	)
}

export default NavigationMenu
