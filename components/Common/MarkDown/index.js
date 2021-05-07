import React, { useState, useEffect } from "react"
import { MarkDownStyle } from "./style"

const MarkdownIt = require("markdown-it")
const hljs = require("./highlight.min")

function MarkDown ({ markdown = "", }) {
	
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
		return () => {}
	}, [markdown])
	
	return (
		<>
			<MarkDownStyle dangerouslySetInnerHTML={ {
				__html: Markdown
			} }>
			</MarkDownStyle>
		</>
	)
}

export default MarkDown
