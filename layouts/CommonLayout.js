import React, { Component } from "react"
import Header from "./../components/Common/Header"

const CommonLayout = (WrapperComponent) => ({ ...props }) => {
	
	
	return (
		<>
			{/*<Header />*/}
			<WrapperComponent {...props} />
		</>
	)
}

export default CommonLayout
