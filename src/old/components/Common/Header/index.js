import React from "react"
import HeaderStyle from "./style"
import Link from "next/link"
import { useWindowScroll, useMaskEvent } from "./hooks"

function Header () {
	
	const isTop = useWindowScroll()
	const [isOpen, onCLick] = useMaskEvent(500)
	
	return (
		<>
			<HeaderStyle isTop={ isTop }>
				<div className="header-body">
					<div className="header-main">
						<div className="header-logo">Billson</div>
						<div className="header-button" onClick={ () => onCLick() }>
							<span/>
							<span/>
							<span/>
							<span/>
						</div>
					</div>
					<ul className={ isOpen ? "header-menu header-menu-active" : "header-menu" }>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/articles">Articles</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
					</ul>
				</div>
				<div className={ isOpen ? "header-mask header-mask-active" : "header-mask" }
				     onClick={ () => onCLick() }/>
			</HeaderStyle>
		</>
	)
}

export default Header
