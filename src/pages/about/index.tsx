import React from "react"
import { Common } from "@/services"
import styles from "./index.module.less"

export const getServerSideProps = async () => {
	const {tags = [], classify = [], link = [], contact = [], copyright = ""} = await Common.GetCommonSettings()
	const {articles = [], special = []} = await Common.GetHomeAggregateData()
	
	console.log("-About-", "API请求成功")
	return {
		props: {
			tags,
			classify,
			link,
			contact,
			copyright,
			articles,
			special
		}
	}
}

function About() {
	
	return (
		<div className={ styles.about }>
			<div className={ styles.header }>关于我的</div>
			<div className={ styles.aboutList }>
				<div className={ styles.aboutItem }>
					从事4年的前端开发经验，对后端认识的比较少，创建个属于自己的博客记录自己的成长。博客创建于2020年的1月，一直在完善当中，致力以最好的用户体验给用户提供有价值的知识。
				</div>
			</div>
		</div>
	)
}

export default About
