import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import SpecialContainerStyle from "./style"

function SpecialContainer ({ special = [], ...props }) {
	
	function ImageLoader({ src, width }){
		return `${src}!default`
	}
	
	return (
		<>
			<SpecialContainerStyle>
				<Swiper
					direction="horizontal"
					loop
					observer
					observeParents
					breakpoints={ {
						200: {  //当屏幕宽度小于等于320
							slidesPerView: 1,
							spaceBetween: 10,
						},
						420: {  //当屏幕宽度小于等于768
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {  //当屏幕宽度小于等于768
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1200: {  //当屏幕宽度小于等于1280
							slidesPerView: 4,
							spaceBetween: 20
						}
					} }
				>
					{
						special.map(item => {
							return (
								<SwiperSlide className="category-item" key={ item.id }>
									<a>
										<div className="category-content" title={ item.title }>
											<Image src={ item.poster } width={ 600 } height={ 390 } />
										</div>
										<span>{ item.title }</span>
									</a>
								</SwiperSlide>
							)
						})
					}
				</Swiper>
			</SpecialContainerStyle>
		</>
	)
}

export default SpecialContainer
