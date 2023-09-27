import React, { Component } from "react"
import BaseLayout from "layouts/BaseLayout"
import AboutContainer from "components/Common/About"

function About({ ...props }){
	
	return (
		<>
			<AboutContainer />
		</>
	)
}

export default BaseLayout(About)
