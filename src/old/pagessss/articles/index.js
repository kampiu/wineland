import Head from "next/head"
import Link from "next/link"
import BaseLayout from "layouts/BaseLayout"
import NavigationMenu from "components/Article/NavigationMenu"
import ArticleItem from "components/Article/ArticleItem"
import ModuleContainer from "components/Home/ModuleContainer"
import Service from "Service"
import throttle from "lodash/throttle"

function Articles ({ ArticleList = [], AppConfig = {}, ...props }) {
	
	const test = throttle(() => {
		console.log("点击我了", props)
	}, 2000)
	
	return (
		<>
			<Head>
				<title>文章列表</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			
			<NavigationMenu tags={ AppConfig.tags } />
			
			<ModuleContainer>
				{
					ArticleList.map(item => {
						return (
							<ArticleItem key={ item.id } itemData={item} />
						)
					})
				}
			</ModuleContainer>
		</>
	)
}

export async function getServerSideProps ({ context, query, ...props }) {
	// 调用外部 API 获取博文列表
	const { status, data = {} } = await Service["Article/GetArticleList"]({
		tags: query.tag
	})
	
	return {
		props: {
			ArticleList: data.data,
			ArticleStatus: status,
		},
	}
}

export default BaseLayout(Articles)
