import { RefObject, useMemo } from "react"
import type { PropsWithChildren } from "react"
import { BaseContext } from "./Context"
import type SimpleBarCore from "simplebar-core"

export interface BaseLayoutProviderProps {
	containerRef: RefObject<SimpleBarCore>
	scrollContainer: HTMLElement
}

export const BaseLayoutProvider = ({children, containerRef, scrollContainer}: PropsWithChildren<BaseLayoutProviderProps>) => {
	
	const value = useMemo(() => {
		return {containerRef, scrollContainer}
	}, [containerRef, scrollContainer])
	
	return (
		<BaseContext.Provider value={ value }>{ children }</BaseContext.Provider>
	)
}

