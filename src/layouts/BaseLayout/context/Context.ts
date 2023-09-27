import { createContext, RefObject } from "react"
import SimpleBarCore from "simplebar-core"

export interface BaseContextStore {
	/** 全局滚动容器（用于处理滚动中的dom绑定） */
	containerRef: RefObject<SimpleBarCore>
}

export const BaseContext = createContext<BaseContextStore>({} as BaseContextStore)
