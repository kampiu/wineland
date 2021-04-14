import styled from "styled-components"


export const HeaderStyle = styled.div`
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
`

