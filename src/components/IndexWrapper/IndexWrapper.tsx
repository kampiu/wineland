import React, { Component } from "react"
import Lottie from "lottie-react"
import animationData from "@/assets/lottie/astronot.json"

function IndexWrapper () {
	
	return (
		<div style={{width:200}}>
			<Lottie animationData={animationData} />
		</div>
	)
}

export default IndexWrapper
