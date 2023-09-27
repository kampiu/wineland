import React, { useState, useEffect } from "react"
import styles from "./MarkDown.module.less"

const MarkdownIt = require("markdown-it")
const hljs = require("./highlight.min")

function MarkDown({markdown = "",}) {
	
	const [Markdown, setMarkdown] = useState("")
	
	useEffect(() => {
		if (markdown && markdown !== "") {
			const MdContext = new MarkdownIt({
				langPrefix: "language-",
				breaks: false,
				html: true,
				linkify: true,
				typographer: true,
				highlight: function (str, lang) {
					if (lang && hljs.getLanguage(lang)) {
						try {
							return hljs.highlight(lang, str).value
						} catch (__) {
						}
					}
					return ""
				}
			})
			setMarkdown(MdContext.render(markdown))
		}
		return () => {
		}
	}, [markdown])
	
	return (
		<div
			className={ styles.container }
			dangerouslySetInnerHTML={ {
				__html: Markdown
			} }
		/>
	)
}

export default MarkDown
