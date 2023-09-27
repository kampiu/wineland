import React, { PropsWithChildren } from "react"
import styles from "./ModuleContainer.module.less"

export interface ModuleContainerProps {
	title?: string
}

function ModuleContainer({title, children}: PropsWithChildren<ModuleContainerProps>) {
	
	return (
		<div className={ styles.module }>
			{
				title && (
					<div className={ styles.moduleHeader }>
						<span>{ title }</span>
					</div>
				)
			}
			<div className={ styles.moduleContainer }>
				{ children }
			</div>
		</div>
	)
}

export default ModuleContainer
