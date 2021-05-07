import React, { useState, useEffect } from "react"
import Head from "next/head"
import BaseLayout from "layouts/BaseLayout"
import MarkDown from "components/Common/MarkDown"
import ArticleDetailContainer from "components/Article/ArticleDetailContainer"

function Article ({ Article = {}, ...props }) {
	
	const [ArticleInfo, setArticleInfo] = useState({
		context: ""
	})
	
	return (
		<>
			<Head>
				<title>{ Article.title }</title>
				<link rel="icon" href="/favicon.ico"/>
				<meta name="keyword" content={ Article.keyword }/>
				<meta name="description" content={ Article.describe }/>
			</Head>
			
			<ArticleDetailContainer article={ Article } />
		
		</>
	)
}

// getStaticProps   getServerSideProps
export async function getServerSideProps ({ params = {}, context }) {
	
	const { id } = params
	// 调用外部 API 获取博文列表
	const response = await fetch(`https://blog.billson.club/api/blog/v1/article?id=${ id }`)
	const data = await response.json()
	
	// 通过返回 { props: { posts } } 对象，Blog 组件
	// 在构建时将接收到 `posts` 参数
	return {
		props: {
			Article: data.data || {},
		},
	}
}

export default BaseLayout(Article)
