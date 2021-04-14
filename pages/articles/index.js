import Head from "next/head"
import Link from "next/link"
import CommonLayout from "./../../layouts/CommonLayout"
import Service from "./../../services"
import throttle from "lodash/throttle"

function Articles ({ ArticleList = [], ...props }) {
	
	const test = throttle(() => {
		console.log("点击我了")
	}, 2000)
	
	return (
		<div>
			<Head>
				<title>Create Next Appsdfsd</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			
			文章
			
			<div onClick={ () => test() }>DEBUG</div>
			
			<ul>
				{
					ArticleList.map(item => {
						
						return (
							<li key={ item.id }><Link href={ `/article/${ item.id }` }>{ item.title }</Link></li>
						)
					})
				}
			
			</ul>
		
		</div>
	)
}

export async function getServerSideProps ({ context }) {
	// 调用外部 API 获取博文列表
	const { status, data = {} } = await Service["Article/GetArticleList"]()
	
	
	return {
		props: {
			ArticleList: data.data,
			ArticleStatus: status
		},
	}
}

export default CommonLayout(Articles)
