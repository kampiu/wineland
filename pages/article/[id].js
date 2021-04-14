import Head from "next/head"
import styled from "styled-components"

const ContainerStyle = styled.div`
	width: 100px;
	height: 100px;
	background-color: red;
`

export default function Article ({ Article = {}, ...props }) {
	return (
		<div>
			<Head>
				<title>{ Article.title }</title>
				<link rel="icon" href="/favicon.ico"/>
				<meta name="keyword" content={ Article.keyword }/>
				<meta name="description" content={ Article.describe }/>
			</Head>
			
			
			<div onClick={ () => console.log(Article) }>DEBUG</div>
			
			<div>
				{
					Article.content_md
				}
			</div>
		</div>
	)
}

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
