import React, { useEffect, useRef, useState } from "react"
import type { PropsWithChildren } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import styles from "./BaseLayout.module.less"
import { Settings } from "@/models/Settings"
import SimpleBar from "simplebar-react"
import throttle from "lodash/throttle"
import { useRouter } from "next/router"
import type SimpleBarCore from "simplebar-core"

export interface BaseLayoutProps extends Settings.Details {
}

function BaseLayout({children, contact, copyright, link}: PropsWithChildren<BaseLayoutProps>) {
	
	const router = useRouter()
	const SimpleBarRef = useRef<SimpleBarCore | null>(null)
	const scrollContainer = useRef<HTMLDivElement | null>(null)
	const [isTop, setTop] = useState<boolean>(true)
	
	useEffect(() => {
		const handleRouteChange = () => {
			scrollContainer.current?.scrollTo(0, 0)
		}
		
		router.events.on("routeChangeComplete", handleRouteChange)
		
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange)
		}
	}, [scrollContainer])
	
	// const element = SimpleBarRef.current?.getScrollElement()
	// useEffect(() => {
	// 	console.log("----", element)
	// 	const onWindowScroll: EventListener = throttle((event) => {
	// 		console.log("----", event.target)
	// 		setTop(event.target?.scrollTop <= 30)
	// 	}, 100, {leading: false, trailing: true})
	// 	element?.addEventListener("scroll", onWindowScroll)
	// 	return () => {
	// 		element?.removeEventListener("scroll", onWindowScroll)
	// 	}
	// }, [element])
	
	useEffect(() => {
		console.log("----", scrollContainer.current)
		const onWindowScroll: EventListener = throttle((event) => {
			console.log("----", event.target)
			setTop(event.target?.scrollTop <= 30)
		}, 100, {leading: false, trailing: true})
		scrollContainer.current?.addEventListener("scroll", onWindowScroll)
		return () => {
			scrollContainer.current?.removeEventListener("scroll", onWindowScroll)
		}
	}, [scrollContainer])
	
	return (
		<div className={ styles.layout }>
			<SimpleBar
				autoHide
				ref={ SimpleBarRef }
				scrollableNodeProps={ {
					ref: (el: HTMLDivElement) => scrollContainer.current = el
				} }
				className={ styles.scrollContainer }
			>
				<Header isTop={ isTop }/>
				<div className={ styles.layoutWrapper }>
					{ children }
				</div>
				<Footer contact={ contact } link={ link } copyright={ copyright }/>
			</SimpleBar>
		</div>
	)
}

export default BaseLayout
