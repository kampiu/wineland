import React, { Component } from "react"
import ModuleContainerStyle from "./style"

function ModuleContainer({ title, children, ...props }){
	
	return (
		<>
			<ModuleContainerStyle>
				{
					title && (
						<div className="module-header">
							<span>{ title }</span>
						</div>
					)
				}
				<div className="module-container">
					{ children }
				</div>
			</ModuleContainerStyle>
		</>
	)
}

export default ModuleContainer
