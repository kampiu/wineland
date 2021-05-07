import styled from "styled-components"
import { ScreenSm } from "Styles"

export default styled.div`
	width: 100%;
    overflow: hidden;
    background-color: #fff;
    margin: 20px 0;
    padding: 20px;
    
    .navigation-item {
        width: 100%;
        display: flex;
        overflow: hidden;
        font-size: 15px;
        color: #515a6e;
        font-weight: 500;
        margin-bottom: 10px;
        
        &:last-child {
            margin-bottom: 0;
            
            .main {
                padding-bottom: 0;
                border-bottom: none;
            }
        }
    }
    
    .title {
        width: 110px;
        height: 40px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        flex: none;
    }
    
    .main {
        flex: auto;
        display: flex;
        flex-wrap: wrap;
        line-height: 40px;
        padding-bottom: 10px;
        border-bottom: 1px solid #f8f8f8;
        padding-top: 8px;
        
        a {
            margin-right: 8px;
            font-size: 14px;
            margin-bottom: 8px;
            line-height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #9c9c9c;
            font-weight: 500;
            cursor: pointer;
            transition: all linear 0.2s;
            padding: 2px 8px;
            background: #fff;
            border: 1px solid #fff;
            
            &:hover {
                background: #fafafa;
                border: 1px solid #d9d9d9;
            }
        }
        
        .active {
            background: #e6f7ff !important;
		    border-color: #91d5ff !important;
		    color: #096dd9;
        }
    }
    
	@media (max-width: ${ ScreenSm }) {
		.navigation-item{
			flex-direction: column;
		}
		.title{
			padding: 0 8px;
		}
	}
`

