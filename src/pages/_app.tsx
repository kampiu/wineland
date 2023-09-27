import React from "react"
import BaseLayout from "@/layouts/BaseLayout"
import Head from "next/head"
import type { AppProps } from "next/app"
import "@/assets/styles/init.less"
import "simplebar-react/dist/simplebar.min.css"
import { Settings } from "@/models/Settings"

function App(props: AppProps<Settings.Details>) {
	const {Component, pageProps} = props
	
	const {classify, contact, copyright, link, tags} = pageProps
	
	return (
		<>
			<Head>
				<title>我是标题</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
			</Head>
			<BaseLayout classify={ classify } contact={ contact } copyright={ copyright } link={ link } tags={ tags }>
				<Component { ...pageProps } />
			</BaseLayout>
		</>
	)
}

export default App
