import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./SpecialContainer.module.less"
import type { Article } from "@/models/Article"

export interface SpecialContainerProps {
	special: Array<Article.Special>
}

function SpecialContainer({special = []}: SpecialContainerProps) {
	
	return (
		<div className={ styles.wrapper }>
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
							<SwiperSlide className={ styles.categoryItem } key={ item.id }>
								<div className={styles.categoryItemWrapper}>
									<div className={ styles.categoryContent } title={ item.title }>
										<Image layout="responsive" className={ styles.categoryImage } src={ item.poster } width={ 600 } height={ 390 } alt=""/>
									</div>
									<span className={ styles.categoryLabel }>{ item.title }</span>
								</div>
							</SwiperSlide>
						)
					})
				}
			</Swiper>
		</div>
	)
}

export default SpecialContainer
