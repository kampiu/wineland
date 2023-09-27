import styled from "styled-components"
import {
	ScreenXs,
	ScreenSm,
	ScreenMd,
	ScreenLg,
	ScreenMax,
} from "Styles"

export const BaseContainerStyle = styled.div`
    padding-bottom: 60px;
    flex-direction: column !important;
	padding-top: 60px;
	margin: 0 auto;
	@media (min-width: ${ ScreenSm }) {
	    width: 98%;
	}
	
	// 992
	@media (min-width: ${ ScreenMd }) {
	    width: 98%;
	}
	
	// 1200
	@media (min-width: ${ ScreenLg }) {
	    width: 100%;
	    max-width: 1200px;
	}
	
	// 1920
	@media (min-width: ${ ScreenMax }) {
	    width: 1200px;
	}
`
