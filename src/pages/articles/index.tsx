import React from "react"
import { Common, Article as ArticleService } from "@/services"
import { Article } from "@/models/Article"
import ModuleContainer from "@/components/ModuleContainer"
import ArticleItem from "@/components/ArticleItem"
import NavigationMenu from "@/components/NavigationMenu"
import type { GetServerSidePropsContext, GetServerSideProps } from "next"
import { Settings } from "@/models/Settings"
import Head from "next/head"

export const getServerSideProps: GetServerSideProps<Settings.Details & { articles: Article.Info }> = async ({query}: GetServerSidePropsContext) => {
	const {tags = [], classify = [], link = [], contact = [], copyright = ""} = await Common.GetCommonSettings()
	const articles = await ArticleService.GetArticleList({tag: query.tag as string, classify: query.classify as string})
	
	console.log("-Articles-", "API请求成功", query)
	return {
		props: {
			tags,
			classify,
			link,
			contact,
			copyright,
			articles,
		}
	}
}

interface ArticlesProps {
	articles: Array<Article.Info>
	tags: Array<Article.Tag>
}

function Articles({articles, tags}: ArticlesProps) {
	
	return (
		<>
			<Head>
				<title>文章列表</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<NavigationMenu tags={ tags }/>
			<ModuleContainer>
				{
					articles.map(item => <ArticleItem key={ item.id } itemData={ item }/>)
				}
			</ModuleContainer>
		</>
	)
}

export default Articles
