import React, { Component } from "react"
import ArticleDetailContainerStyle from "./style"
import MarkDown from "components/Common/MarkDown"

function ArticleDetailContainer ({ article = {}, ...props }) {
	
	return (
		<>
			<ArticleDetailContainerStyle>
				
				<div className="article-container">
					<div className="article-header">
						<span className="article-title">{ article.title }</span>
						<div className="article-message">
							<span className="article-date">{ article.created_at }</span>
							<span className="article-sub">{ article.look }</span>
						</div>
					</div>
					<MarkDown markdown={ article.content_md }/>
				</div>
				<div className="recommend-container">
				
				</div>
			
			</ArticleDetailContainerStyle>
		</>
	)
}

export default ArticleDetailContainer
