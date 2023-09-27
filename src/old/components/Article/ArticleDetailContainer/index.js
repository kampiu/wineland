import React, { useRef } from "react"
import ArticleDetailContainerStyle, { RecommendStyle } from "./style"
import MarkDown from "components/Common/MarkDown"
import { useSticky } from "./hooks"

const Demo = () => {
	
	const ASideRef = useRef({})
	const [style] = useSticky(ASideRef)
	
	return (
		<>
			<RecommendStyle ref={ ASideRef } style={ style }>
				<div className="nav-header"><span className="header-text">其他</span></div>
				<div className="nav-body">
				
				</div>
			</RecommendStyle>
		</>
	)
}

function ArticleDetailContainer ({ article = {}, ...props }) {
	
	const {
		content_md = "",
		look = 0,
		created_at,
		title = ""
	} = article
	
	return (
		<>
			<ArticleDetailContainerStyle>
				
				<div className="article-container">
					<div className="article-header">
						<span className="article-title">{ title }</span>
						<div className="article-message">
							<span className="article-date">{ created_at }</span>
							{/*<span className="article-sub">{ look }</span>*/}
						</div>
					</div>
					<MarkDown markdown={ content_md }/>
				</div>
				<div className="recommend-container">
					{/*<Demo/>*/}
				</div>
			
			</ArticleDetailContainerStyle>
		</>
	)
}

export default ArticleDetailContainer
