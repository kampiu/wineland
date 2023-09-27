import styled from "styled-components"
import { ScreenSm } from "Styles"

export default styled.div`
	margin: 36px 0;
    padding: 20px;
    overflow: hidden;
    
    .header {
        line-height: 40px;
        font-size: 16px;
        font-weight: 700;
        color: #333;
        text-align: center;
    }
    
    .about-list {
        margin: 10px auto 20px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .about-item {
            font-size: 14px;
            margin-bottom: 10px;
            text-align: center;
            line-height: 24px;
            color: #444;
        }
        
        span {
            font-size: 16px;
            font-weight: 600;
            margin: 0 4px;
            cursor: pointer;
        }
    }
    
    @media (max-width: ${ ScreenSm }) {
        .about-item {
            max-width: 100%;
        }
    }
    @media (min-width: ${ ScreenSm }) {
        .about-item {
            max-width: 60%;
        }
    }
`

