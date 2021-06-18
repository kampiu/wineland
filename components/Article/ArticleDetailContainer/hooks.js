import { useEffect, useState } from "react"
import throttle from "lodash/throttle"

export const useSticky = (dom) => {
	const [style, setStyle] = useState({})
	
	useEffect(() => {
		const handleScroll = throttle((e) => {
			const { offsetHeight = 0 } = document.getElementsByClassName("article-container")[0]
			requestAnimationFrame(() => {
				const { scrollTop = 0 } = document.documentElement || document.body
				const topHeight = dom.current.offsetHeight
				if (window.innerWidth >= 1200) {
					if (scrollTop < 10) {
						setStyle({
							position: "relative"
						})
					} else if ((scrollTop) >= (offsetHeight - topHeight)) {
						setStyle({
							position: "absolute",
							bottom: 40
						})
					} else {
						setStyle({
							position: "fixed",
							width: 280,
							top: 80,
							right: (window.innerWidth - 1205) / 2
						})
					}
				} else {
					setStyle({})
				}
			})
		}, 15)
		window.addEventListener("scroll", handleScroll)
		window.addEventListener("resize", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
			window.removeEventListener("resize", handleScroll)
		}
	}, [])
	
	return [style]
}
