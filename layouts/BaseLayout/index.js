import React, { useEffect, useState } from "react"
import Header from "components/Common/Header"
import Footer from "components/Common/Footer"
import { BaseContainerStyle } from "./style"

const BaseLayout = (WrapperComponent) => ({ AppConfig = {}, ...props }) => {
	
	return (
		<>
			<Header/>
			<BaseContainerStyle>
				<WrapperComponent { ...props } AppConfig={ AppConfig }/>
			</BaseContainerStyle>
			<Footer { ...AppConfig } />
		</>
	)
}

export default BaseLayout
