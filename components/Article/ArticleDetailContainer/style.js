import styled from "styled-components"
import { ScreenXs, ScreenMd, ScreenLg, fontBreak } from "Styles"

export default styled.div`
	.article-header{
        width: 100%;
        border-bottom: 1px solid #f8f8f8;
        margin-bottom: 20px;
        
        .article-title {
            font-size: 28px;
            font-weight: 600;
            min-height: 40px;
            max-height: 72px;
            color: #222;
            margin-bottom: 6px;
            ${ fontBreak(2, "36px") }
        }
        
        .article-message {
            color: #969696;
            /*height: 35px;*/
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            
            span {
                margin-right: 16px;
                display: flex;
                height: 20px;
                align-items: center;
                min-width: 100px;
            }
        }
    }
	.article-container {
        background-color: #FFF;
        width: 100%;
        padding: 2em 3%;
        overflow: hidden;
        flex: auto;
        margin-right: 25px;
    }
    .recommend-container{
    
    }
    
    
    
    // < 480
    @media (max-width: ${ ScreenXs }) {
        .recommend-container {
            margin: 20px auto;
        }
    }

    // 992
    @media (min-width: ${ ScreenMd }) {
        display: flex;
        flex-direction: column;
        padding: 20px 0 100px 0;
        .recommend-container {
            flex: auto;
        }
    }

    // 1200
    @media (min-width: ${ ScreenLg }) {
        display: flex;
        flex-direction: row;
        padding: 20px 0 40px 0;
        .recommend-container {
            width: 280px;
            flex: none;
        }
    }
`

