import React from "react"
import { Common } from "@/services"
import { Article } from "@/models/Article"
import ArticleItem from "@/components/ArticleItem"
import SpecialContainer from "@/components/SpecialContainer"
import ModuleContainer from "@/components/ModuleContainer"
import IndexWrapper from "@/components/IndexWrapper"
import Head from "next/head"

export const getServerSideProps = async () => {
	const { tags = [], classify = [], link = [], contact = [], copyright = "" } = await Common.GetCommonSettings()
	const {articles = [], special = []} = await Common.GetHomeAggregateData()
	
	console.log("-Index-", "API请求成功")
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

interface IndexProps {
	articles: Array<Article.Info>
	special: Array<Article.Special>
}

function Index({ articles, special }: IndexProps) {
	
	return (
		<>
			<Head>
				<title>BiuBiuKam 博客</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<IndexWrapper />
			<ModuleContainer title="专题">
				<SpecialContainer special={ special }/>
			</ModuleContainer>
			<ModuleContainer title="文章">
				{
					articles.map(item => <ArticleItem key={ item.id } itemData={ item }/>)
				}
			</ModuleContainer>
		</>
	)
}

export default Index
