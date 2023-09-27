import React, { Component, use, useEffect } from "react"
import { Common } from "@/services"

function Demo() {
	
	useEffect(() => {
		Common.GetCommonSettings()
			.then(response => {
				console.log("=====", response)
			})
		
	}, [])
	
	return (
		<div>异步组件</div>
	)
}

export default Demo
