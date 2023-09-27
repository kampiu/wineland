import styled from "styled-components"
import {
	ScreenXs,
	ScreenMd,
} from "Styles"

export default styled.div`
	flex: none;
    float: left;
    background-color: #FFF;
    cursor: pointer;
    display: flex;
    box-shadow: 0 0 10px 0 rgba(39, 49, 65, 0.1);
    
    img{
        transition: all linear 0.5s;
    }
    
    &:hover img {
        transform: scale(1.1, 1.1);
    }
    
    .poster {
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        display: flex;
        flex: none;
        img{
	        background: linear-gradient(90deg, #FCFCFC, #EDEDED, #FCFCFC);
	        background-size: 1000px 480px;
	        animation: skeleton 2s linear infinite;
        }
    }
    
    .box {
        margin-left: 20px;
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .name {
        width: 100%;
        min-height: 25px;
        max-height: 50px;
        font-size: 15px;
        font-weight: 600;
        color: #555555;
        flex: none;
        .fontBreak(2, 25px);
    }
    
    .message {
        width: 100%;
        height: 60px;
        flex: none;
        font-size: 13px;
        color: #aaa;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        line-height: 20px;
        text-indent: 2em;
        
        &::before, &::after {
            display: none;
        }
    }
    
    .tag-list {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        overflow: hidden;
        flex: none;
    }
	// < 480
	@media (max-width: ${ ScreenXs }) {
        width: 100%;
        height: 140px;
        margin: 8px 0;
        padding: 15px 10px;
        box-shadow: 0 4px 32px rgba(33, 33, 33, 0.02) !important;

        .poster {
            width: 160px;
            height: 110px;
        }

        .message {
            display: none;
        }
	}
	// 480
	@media (min-width: ${ ScreenXs }) {
		height: 160px;
        width: 98%;
        margin: 12px 1%;
        padding: 15px;

        .poster {
            width: 200px;
            height: 130px;
        }

        .message {
            display: -webkit-box;
        }
	}
	
	// 992
	@media (min-width: ${ ScreenMd }) {
		width: 49%;
        margin: 14px 0;

        &:not(:nth-child(2n)) {
            margin-right: 2%;
        }
	}
	
	// 1920
	@media (min-width: ${ ScreenMd }) {
		height: 180px;

        .poster {
            width: 230px;
            height: 150px;
        }
	}

`

