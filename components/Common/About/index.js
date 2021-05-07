import React, { Component } from "react"
import AboutStyle from "./style"

function About () {
	
	return (
		<>
			<AboutStyle>
				<div className="header">关于我的</div>
				<div className="about-list">
					<div className="about-item">
						从事4年的前端开发经验，对后端认识的比较少，创建个属于自己的博客记录自己的成长。博客创建于2020年的1月，一直在完善当中，致力以最好的用户体验给用户提供有价值的知识。
					</div>
				</div>
				<div className="header">项目合作</div>
				<div className="about-list">
					<div className="about-item">承接各种个人&团队项目(Web 开发、小程序开发、其他软件开发等)，价格可谈，如有意向合作可以加<span>微信</span>
						咨询，并注明您的称呼+商务合作，谢谢！
					</div>
				</div>
			</AboutStyle>
		</>
	)
}

export default About
