import React from "react"
import type { Settings } from "@/models/Settings"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import clsx from "clsx"
import styles from "./Footer.module.less"

export interface FooterProps {
	/** 联系方式 */
	contact: Array<Settings.Contact>
	/** 友情链接 */
	link: Array<Settings.Link>
	/** 版权信息 */
	copyright: string
}

function Footer(props: FooterProps) {
	const {
		contact = [],
		link = [],
		copyright = "",
	} = props
	
	return (
		<div className={ styles.footer }>
			<Swiper
				className={ styles.footerBody }
				direction="horizontal"
				loop
				observer
				observeParents
				breakpoints={ {
					200: {  //当屏幕宽度小于等于320
						slidesPerView: 1,
					},
					420: {  //当屏幕宽度小于等于768
						slidesPerView: 2,
					},
					768: {  //当屏幕宽度小于等于768
						slidesPerView: 3,
					},
					1200: {  //当屏幕宽度小于等于1280
						slidesPerView: 4,
					}
				} }
			>
				{
					link.map(item => {
						return (
							<SwiperSlide className={styles.wrapperList} key={ item.id }>
								<div className={ clsx(styles.wrapperListHeader,styles.wrapperListNav) }><span>{ item.title }</span></div>
								{
									item.links.map(linkItem => (
										<div key={ linkItem.id } className={styles.wrapperListNav}>
											<a className={styles.wrapperListNavLink} title="_item.title">{ linkItem.title }</a>
										</div>
									))
								}
							</SwiperSlide>
						)
					})
				}
			</Swiper>
			
			<div className={ styles.footerBox }>
				<div className={ styles.footerBoxHeader }>Contact information</div>
				<div className={ styles.footerBoxMain }>
					{
						contact.map(item => {
							return (
								<a className={styles.footerBoxMainLink} key={ item.id }>
									<img className={styles.footerBoxMainImage} src={ item.icon } alt=""/>
								</a>
							)
						})
					}
				</div>
			</div>
			<div className={ styles.footerBackgroundWrapper }>
				<div className={ styles.footerBackground }>
					<div className={ styles.clouds }/>
					<div className={ styles.background }/>
					<div className={ styles.foreground }/>
				</div>
			</div>
			{/*Copyright © 2019-2020 野胡子的独立博客. 琼ICP备19001769号*/ }
			<div className={ styles.footerWrapper }><a href="https://beian.miit.gov.cn/">{ copyright }</a></div>
		</div>
	)
}

export default Footer
