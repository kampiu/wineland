import styled from "styled-components"
import {
	ScreenSm,
	ScreenXs,
	ScreenMd,
	ScreenLg,
	ScreenMax,
} from "Styles"

export const FooterStyle = styled.div`
	width: 100%;
    padding-top: 60px;
    background-color: #FFFFFF;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    .footer-body {
		max-width: 1200px;
		flex: none;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex: none;
		
		li {
			transition: all linear 0.2s;
		}
	}
	
    // 480
    @media (max-width: ${ ScreenXs }) {
        .footer-body {
            width: 100%;
        }
    }
    // 480
    @media (min-width: ${ ScreenXs }) {
        .footer-body {
            width: 100%;
        }
    }
    // 768
    @media (max-width: ${ ScreenSm }) {
        .footer-body {
            flex-direction: column;
            padding: 50px 0 30px 0;
            .list {
                width: 100%;
                margin: 30px 0;
            
	            .header {
	                width: 100%;
	                text-align: center;
	                color: rgba(0, 0, 0, .85);
	                font-weight: 400;
	                font-size: 20px;
	                margin: 0 0 40px 0;
	            }
	            
	            li {
	                width: 50%;
	                float: left;
	                color: #898989;
	                font-weight: 500;
	                font-size: 14px;
	                line-height: 38px;
	                a{
	                    cursor: pointer;
	                }
	                
	                &:nth-child(2),
	                &:nth-child(4) {
	                    text-align: right;
	                    padding-right: 20px;
	                }
	                
	                &:nth-child(3),
	                &:nth-child(5) {
	                    text-align: left;
	                    padding-left: 20px;
	                }
	            }
	        }
        }
    }
    
    // 768
    @media (min-width: ${ ScreenSm }) {
        .footer-body {
            flex-direction: row;
            padding: 50px 0 30px 0;
            .list {
                width: 25%;
                height: 100%;
                flex: none;
                padding-left: 40px;
            
                li {
                    width: auto;
                    color: #898989;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 30px;
                    padding: 0 !important;
                    a{
                        cursor: pointer;
                        &:hover{
                            color: #333333;
                        }
                    }
                }
                .header {
                    color: rgba(0, 0, 0, .85);
                    font-weight: 400;
                    font-size: 18px;
                    margin-bottom: 10px;
                }
            }
        }
    }

    // 992
    @media (min-width: ${ ScreenMd }) {
        .footer-body{
            width: 98%;
        }
    }

    // 1200
    @media (min-width: ${ ScreenLg }) {
        .footer-body{
            width: 100%;
            max-width: 1200px;
        }
    }

    // 1920
    @media (min-width: ${ ScreenMax }) {
        .footer-body{
            width: 100%;
            max-width: 1200px;
        }
    }
    
	.footer-box {
		width: 100%;
		overflow: hidden;
		display: flex;
		padding: 0 30px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	
		.header {
			width: 100%;
			line-height: 50px;
			font-size: 24px;
			text-align: center;
			margin: 80px 0 10px 0;
			color: #999999;
		}
		
		.main {
			width: 100%;
			margin-bottom: 50px;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
		
			a {
                width: 50px;
                height: 50px;
                margin: 20px;
                border-radius: 50%;
                overflow: hidden;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
				position: relative;
				z-index: 200;
				box-shadow: 0 0 10px 0 rgba(183,183,183,0.5);
			}
			img{
                width: 60%;
                height: 60%;
                cursor: pointer;
                transition: all linear 0.2s;
                filter: grayscale(88%);
			}
            a:hover img,
            img:hover{
                filter: grayscale(0) !important;
            }
		}
	}
    
    .footer-box-loading {
		.main {
			a {
				background: linear-gradient(90deg, #FCFCFC, #EFEFEF, #FCFCFC);
				background-size: 500px 480px;
				animation: skeleton-animation 3s linear infinite;
			}
			img{
				opacity: 0;
			}
		}
    }
    
    .footer-body-loading {
		.list {
			span, a {
				  display: inline-block;
				  background: linear-gradient(90deg, #FCFCFC, #EFEFEF, #FCFCFC);
				  background-size: 500px 480px;
				  animation: skeleton-animation 3s linear infinite;
			}
			span {
				width: 140px;
				height: 24px;
			}
			
			a {
				width: 80px;
				height: 20px;
			}
		}
    }
    
    .footer-wrapper {
		width: 100%;
		height: auto;
		flex: none;
		line-height: 60px;
		font-size: 12px;
		color: #9C9C9C;
		display: flex;
		position: relative;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
		
		&::before {
			content: "";
			width: 60%;
			height: 1px;
			display: inline-block;
			position: absolute;
			left: 50%;
			top: 0;
			background-color: #F2F2F2;
			transform: translateX(-50%) scaleY(0.5);
		}
    }
    
`

export const FooterBackgroundStyle = styled.div`
	height: 200px;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 1;
    
    .footer-background {
		bottom: 0;
		left: 0;
		height: 18rem;
		position: absolute;
		width: 100%;
		z-index: 1;
		transform: translate3d(0, 0, 0);
		
		.clouds {
			background-repeat: repeat-x;
			background-image: url("/images/clouds.png");
			background-size: 225em 15em;
			position: absolute;
			top: -2em;
			right: 0;
			bottom: 0;
			left: 0;
		}
		
		.foreground {
			background-repeat: repeat-x;
			background-image: url("/images/foreground.png");
			background-size: 225em 15em;
			position: absolute;
			top: 1rem;
			right: 0;
			bottom: 0;
			left: 0;
		}
		
		.background {
			background-repeat: repeat-x;
			background-image: url("/images/background.png");
			background-size: 225em 21.313em;
			position: absolute;
			top: -1em;
			right: 0;
			bottom: 0;
			left: 0;
		}
		
		div {
			bottom: 0;
			left: 0;
			height: 15rem;
			margin: 0;
			position: absolute;
			width: 100%;
		}
    }
`
