import styled from "styled-components"
import { fontBreak, ScreenXs } from "Styles"

export default styled.div`
    width: 100%;
    min-height: 120px;
    padding: 10px 0;
    position: unset;
    opacity: 0;
    transform: translate(0, 30%);
    transition: all 0.5s cubic-bezier(0.555, 0.105, 0.225, 1.26), opacity 0.5s ease-in;
    animation-name: slideInUp;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    
    &::after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
	
	.category-item {
        min-height: 120px;
        /*background-color: #f2f2f2;*/
        background: linear-gradient(90deg, #FCFCFC, #EFEFEF, #FCFCFC);
        background-size: 1000px 480px;
        animation: skeleton-animation 3s linear infinite;
        display: flex;
        border-radius: 4px;
        float: left;
        
        &:not(:nth-child(4n)) {
            margin-right: 6% / 3;
        }
        
        a {
            width: 100%;
            height: 100%;
            display: inline-block;
            border-radius: 4px;
            overflow: hidden;
            position: relative;
        }
        
        .category-content {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: auto;
            height: auto;
            overflow: hidden;
            box-shadow: 0 0 10px 0 rgba(39, 49, 65, 0.1);
            
            img{
                transition: all linear 0.2s;
            }
            &:hover img {
                transform: scale(1.1, 1.1);
            }
        }
        
        span {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: rgba(33, 33, 33, 0.5);
            font-size: 14px;
            padding: 0 12px;
            height: 44px;
            color: #d9d9d9;
            ${ fontBreak(1, "44px") }
        }
    }
    // 420
    @media (max-width: ${ ScreenXs }) {
        .category-box{
            width: 96%;
            margin:0 auto;
        }
    }
`

