import Head from "next/head"
import BaseLayout from "layouts/BaseLayout"
import SpecialContainer from "components/Home/SpecialContainer"
import ArticleItem from "components/Article/ArticleItem"
import ModuleContainer from "components/Home/ModuleContainer"
import Service from "Service"

function Home ({ Special = [], Articles = [], ...props }) {
	
	return (
		<>
			<Head>
				<title>BiuBiuKam 博客</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			
			<ModuleContainer title="专题">
				<SpecialContainer special={ Special }/>
			</ModuleContainer>
			
			<ModuleContainer title="文章">
				{
					Articles.map(item => <ArticleItem key={ item.id } itemData={ item }/>)
				}
			</ModuleContainer>
		</>
	)
}

export async function getServerSideProps ({ context }) {
	// 调用外部 API 获取首页聚合数据
	const { status, data = {} } = await Service["Common/GetHomeAggregateData"]()
	
	return {
		props: {
			Special: data.special || [],
			Articles: data.articles || [],
			status
		},
	}
}

export default BaseLayout(Home)
