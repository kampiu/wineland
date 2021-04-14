import React, { Component } from "react"
import { HeaderStyle } from "./style"
import Link from "next/link"

function Header(){
	
	return (
		<>
			<HeaderStyle>
				<div className="header-body">
					<div className="header-main">
						<div className="header-logo">Billson</div>
						<div className="header-button">
							<span />
							<span />
							<span />
							<span />
						</div>
					</div>
					<ul className="header-menu">
						<li>
							<Link href="/articles">Articles</Link>
							<Link href="ddf">sfsdf</Link>
						</li>
					</ul>
				</div>
			</HeaderStyle>
		</>
	)
}

export default Header
