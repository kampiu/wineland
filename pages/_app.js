import React, { useState, useEffect } from "react"
import "../styles/globals.css"
import "swiper/swiper.min.css"
import Service from "Service"

function MyApp ({ Component, pageProps, ...props }) {
	
	const [AppConfig, setAppConfig] = useState({
		classify: [],      // 文章分类
		tags: [],          // 文章标签
		contact: [],       // 联系方式
		link: [],          // 友情链接
		copyright: "",     // 版权说明
	})
	
	useEffect(() => {
		const taskId = setTimeout(async () => {
			await InitialApplication()
		}, 100)
		return () => clearTimeout(taskId)
	}, [])
	
	async function InitialApplication(){
		const { status, data } = await Service["Common/GetCommonSettings"]()
		
		if(status === 20000){
			setAppConfig({
				...AppConfig,
				...data
			})
		}
	}
	
	return <Component { ...pageProps } AppConfig={ AppConfig }/>
}

export default MyApp
