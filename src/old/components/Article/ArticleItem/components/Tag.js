import React, { Component } from "react"
import Image from "next/image"
import styled from "styled-components"

const TagContainerStyle = styled.div`
    width: auto;
    margin-right: 10px;
    color: #999999;
    padding: 2px 6px 2px 6px;
    border-radius: 2px;
    font-weight: 500;
    background-color: #FFFFFF;
    display: flex;
    font-size: 12px;
    align-items: center;
    &>div{
        margin-right: 4px !important;
    }
`

function Tag ({ tag = {}, }) {
	
	return (
		<>
			<TagContainerStyle>
				<Image width={ 20 } height={ 20 } src={ tag.tag_poster } alt="" />
				{ tag.tag_name }
			</TagContainerStyle>
		</>
	)
}

export default Tag
