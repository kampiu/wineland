import React, { useCallback, useEffect, useState } from "react"
import styles from "./Header.module.less"
import Link from "next/link"
import clsx from "clsx"
import throttle from "lodash/throttle"

const enum HeaderStatus {
	VISIBLE = "visible",
	HIDDEN = "hidden",
	None = "none"
}

export interface HeaderProps {
	isTop?: boolean
}

function Header({ isTop }: HeaderProps) {
	
	const [menuState, setMenuState] = useState<HeaderStatus>(HeaderStatus.None)
	
	const onWindowResize = throttle(useCallback(() => {
		const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
		
		setMenuState((preState: HeaderStatus) => {
			if (preState && width > 768) {
				return HeaderStatus.None
			}
			
			return preState
		})
	}, []), 200, {leading: true, trailing: false})
	
	useEffect(() => {
		window.addEventListener("resize", onWindowResize)
		return () => window.removeEventListener("resize", onWindowResize)
	}, [onWindowResize])
	
	const onClick = useCallback(throttle(() => {
		setMenuState((preState) => {
			if (preState === HeaderStatus.VISIBLE) {
				return HeaderStatus.HIDDEN
			}
			
			return HeaderStatus.VISIBLE
		})
	}, 500, {leading: true, trailing: false}), [])
	
	return (
		<>
			<div
				className={ styles.header }
				style={ {
					boxShadow: isTop ? "unset" : "0 2px 10px rgba(0, 0, 0, .05)"
				} }
			>
				<div className={ styles.headerWrapper }>
					<div className={ styles.headerBody }>
						
						<div className={ styles.headerMain }>
							<div className={ styles.headerLogo }>BiuBiuKam</div>
							<div
								className={ styles.headerButton }
								onClick={ onClick }
							>
								<span/>
								<span/>
								<span/>
								<span/>
							</div>
						</div>
						<ul
							className={ clsx(styles.headerMenu, {
								[styles.headerMenuActive]: menuState === HeaderStatus.VISIBLE,
							}) }
						>
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
				</div>
				<div
					className={ clsx(styles.mask, {
						[styles.maskActiveIn]: menuState === HeaderStatus.VISIBLE,
						[styles.maskActiveOut]: menuState === HeaderStatus.HIDDEN,
					}) }
					onClick={ onClick }
				/>
			</div>
		</>
	)
}

export default Header
