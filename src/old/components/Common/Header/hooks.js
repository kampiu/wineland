import { useEffect, useState } from "react"
import throttle from "lodash/throttle"

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
	const [isLock, setLock] = useState(false)
	const [isOpen, setOpen] = useState(false)
	
	const onCLick = function (){
		if(isLock){
			return
		}
		setLock(true)
		setOpen(v => !v)
		setTimeout(() => {
			setLock(false)
		}, wait)
	}
	
	return [isOpen, onCLick]
}
