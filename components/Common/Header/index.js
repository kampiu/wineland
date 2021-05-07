import React from "react"
import HeaderStyle from "./style"
import Link from "next/link"

function Header(){
	
	return (
		<>
			<HeaderStyle>
				<div className="header-body">
					<div className="header-main">
						<div className="header-logo">BiuBiuKam</div>
						<div className="header-button">
							<span />
							<span />
							<span />
							<span />
						</div>
					</div>
					<ul className="header-menu">
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
			</HeaderStyle>
		</>
	)
}

export default Header
