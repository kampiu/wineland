import React from "react"
import { Common, Article as ArticleService } from "@/services"
import { Article as ArticleModel } from "@/models/Article"
import { GetServerSidePropsContext } from "next"
import Head from "next/head"
import MarkDown from "@/components/MarkDown"
import styles from "./index.module.less"

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
	const { tags = [], classify = [], link = [], contact = [], copyright = "" } = await Common.GetCommonSettings()
	const article = await ArticleService.GetArticleDetail(params?.id as string)
	
	console.log("-Article-", "API请求成功", params)
	return {
		props: {
			tags,
			classify,
			link,
			contact,
			copyright,
			article
		}
	}
}

interface ArticleProps {
	article: ArticleModel.Details
}

function Article ({ article }: ArticleProps) {
	
	return (
		<>
			<Head>
				<title>{ article.title }</title>
				<link rel="icon" href="/favicon.ico"/>
				<meta name="keyword" content={ article?.keyword || "" }/>
				<meta name="description" content={ article?.describe || "" }/>
			</Head>
			<div className={styles.article}>
				
				<div className={styles.articleContainer}>
					<div className={styles.articleHeader}>
						<span className={styles.articleTitle}>{ article.title }</span>
						<div className={styles.articleMessage}>
							<span className={styles.articleDate}>{ article.created_at }</span>
						</div>
					</div>
					<MarkDown markdown={ article?.content_md }/>
				</div>
				{/*<div className={styles.recommendContainer}>*/}
				{/*	/!*<Demo/>*!/*/}
				{/*</div>*/}
			
			</div>
		</>
	)
}

export default Article
