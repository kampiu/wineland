import React, { useCallback, useEffect, useState } from "react"
import throttle from "lodash/throttle"
import debounce from "lodash/debounce"

export const useWindowScroll = () => {
	const [isTop, setIsTop] = useState(true)
	useEffect(() => {
		const handleScroll = throttle((e) => {
			const Target = document.documentElement || document.body
			setIsTop(Target.scrollTop <= 30)
		}, 100)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])
	return isTop
}

export const useMaskEvent = (wait = 200) => {
	const [isOpen, setOpen] = useState(false)
	
	const onClick = debounce(useCallback(() => {
		setOpen(v => !v)
	}, []), wait, {leading: true, trailing: false})
	
	return {isOpen, onClick}
}
