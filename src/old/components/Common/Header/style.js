import styled from "styled-components"
import { ScreenXs, ScreenSm, ScreenMd, ScreenLg, ScreenMax } from "Styles"

export default styled.div`
	width: 100%;
	height: 60px;
	background-color: #FFF;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 800;
	flex: none;
	transition: all linear 0.12s;
	box-shadow: ${ ({ isTop = true }) => isTop ? "unset" : "0 2px 10px rgba(0, 0, 0, .05)"};
	
	.header-body {
		height: 100%;
		display: flex;
		flex: none;
		background-color: #FFF;
		position: relative;
		z-index: 400;
		justify-content: space-between;
		align-items: center;
	}
	
	.header-main {
		height: 60px;
		flex: auto;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0 12px 0 0;
		background-color: #FFF;
		z-index: 1000;
	}
	
	.header-logo {
		width: 120px;
		height: 50px;
		flex: none;
		position: relative;
		z-index: 700;
		padding-left: 50px;
		display: flex;
		align-items: center;
		font-size: 18px;
		font-weight: 500;
		color: #999;
		margin-right: auto;
		background-size: 36px 36px;
		background-position: left center;
		background-repeat: no-repeat;
		background-image: url("https://image.billson.club/articles/logo.png");
	}
	
	.header-menu {
		height: auto;
		left: 0;
		z-index: 600;
		display: flex;
		background-color: #FFF;
		align-items: center;
		justify-content: center;
		transition: all linear 0.2s;
		
		li {
			height: 50px;
			cursor: pointer;
			display: flex;
		}
		
		a {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			flex: auto;
			color: #606060;
			font-size: 16px;
			
			&::after {
				content: '';
				display: block;
				height: 1px;
				background: #d9d9d9;
				position: absolute;
				bottom: -31px;
				left: 0;
				right: 0;
				opacity: 0;
				transform: scale(0, 1);
				z-index: 1;
			}
		}
	}


	.header-button{
		margin: 0 8px 0 20px;
		width: 40px;
		height: 38px;
		/*background-color: orange;*/
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		flex: none;
		transition: all linear 0.2s;
		padding: 4px 0;
		position: relative;
		z-index: 700;
		border: 2px solid #efefef;
		border-radius: 4px;
		cursor: pointer;
		
		span {
			display: block;
			width: 30px;
			height: 2px;
			border-radius: 2px;
			background-color: #666;
			transition: all linear 0.2s;
		}
		
		span:nth-child(4) {
			position: absolute;
			top: 45%;
			transform: translateY(50%);
			margin: 0;
		}
	}
	
	.header-mask {
        width: 100vw;
        height: 100vh;
        position: fixed;
        background-color: rgba(0, 0, 0, 0);
        transition: all linear 0.2s;
        margin-bottom: auto;
        top: 0;
        left: 0;
        z-index: -1000;
        display: none;
    }
    .header-mask-active{
        transition: all linear 0.2s;
        animation-name: Test;
        animation-duration: 0.2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        display: inline-block;
    }
	
	@media (max-width: ${ ScreenXs }) {
		.header-body {
            width: 100%;
            padding: 0 0;
        }
		.header-logo {
			background-position: 10px center;
			background-size: 30px 30px;
			font-size: 20px;
		}
		
		.header-button {
			display: flex;
		}
		
		.header-main {
			width: 100%;
			position: fixed;
			left: 0;
			top: 0;
			z-index: 1000;
			
			li {
				width: 100%;
			}
		}
	
		.header-menu {
			transform: translateY(-300px);
			width: 100%;
			transition: all linear 0.2s;
			flex-direction: column;
		
			li {
				width: 100%;
				height: 50px;
				display: flex;
				margin: 0;
			}
		}
	
		.header-menu-active {
			position: fixed;
			transition: all linear 0.2s;
			top: 0;
			left: 0;
			transform: translateY(60px);
		}
	}
	
	// 480 ~ 768
	@media (min-width: ${ ScreenXs }) {
		.header-body {
            width: 100%;
        }
		.header-button {
			display: flex;
		}
		
		.header-main {
			width: 100%;
			position: fixed;
			padding-left: 20px;
			left: 0;
			top: 0;
			z-index: 1000;
		
			li {
				width: 100%;
			}
		}
		
		.header-menu {
			transform: translateY(-300px);
			width: 100%;
			flex-direction: column;
		
			li {
				width: 100%;
				height: 50px;
				display: flex;
				margin: 0;
			}
		
			.header-menu-active {
				position: fixed;
				transition: all linear 0.2s;
				top: 0;
				left: 0;
				transform: translateY(60px);
			}
		}
	}
	
	// 768
	@media (min-width: ${ ScreenSm }) {
        .header-body {
            width: 90%;
            padding: 0 12px;
        }
		.header-button {
			display: none;
		}
		
		.header-main {
			width: auto;
			position: relative;
			flex-direction: row;
		}
		
		.header-menu {
			width: auto;
			transition: none;
			transform: translateY(0);
			flex-direction: row;
		
			li {
				width: auto;
				margin: 0 4px 0 28px;
			}
		}
	
		.header-menu-active {
			position: relative;
		}
	}
	// 768
    @media (min-width: ${ ScreenMd }) {
        .header-body {
            width: 98%;
            padding: 0 12px;
        }
	}
	
	// 1200
	@media (min-width: ${ ScreenLg }) {
        .header-body {
            width: 100%;
            max-width: 1200px;
            padding: 0;
        }
	}
	
	// 1920
	@media (min-width: ${ ScreenMax }) {
        .header-body {
            width: 1200px;
        }
	}
`

