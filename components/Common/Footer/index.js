import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FooterStyle, FooterBackgroundStyle } from "./style"

function Footer ({
	contact = [],
	link = [],
	copyright = "",
	...props
}) {
	
	return (
		<>
			<FooterStyle>
				<Swiper
					className="footer-body"
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
								<SwiperSlide className="list" key={ item.id }>
									<li className="header"><span>{ item.title }</span></li>
									{
										item.links.map(linkItem => (
											<li key={ linkItem.id }>
												<a title="_item.title">{ linkItem.title }</a>
											</li>
										))
									}
								</SwiperSlide>
							)
						})
					}
				</Swiper>
				
				<div className="footer-box">
					<div className="header">Contact information</div>
					<div className="main">
						{
							contact.map(item => {
								return (
									<a key={ item.id }>
										<img src={ item.icon } alt=""/>
									</a>
								)
							})
						}
					</div>
				</div>
				<FooterBackgroundStyle>
					<div className="footer-background">
						<div className="clouds"/>
						<div className="background"/>
						<div className="foreground"/>
					</div>
				</FooterBackgroundStyle>
				{/*Copyright © 2019-2020 野胡子的独立博客. 琼ICP备19001769号*/ }
				<div className="footer-wrapper">{ copyright }</div>
			</FooterStyle>
		</>
	)
}

export default Footer
