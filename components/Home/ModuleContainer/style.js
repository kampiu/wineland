import styled from "styled-components"

export default styled.div`
	.module-header {
        width: 100%;
        padding: 40px 0 24px 0;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            font-size: 18px;
            position: relative;

            &::before,
            &::after {
                content: "";
                width: 36px;
                height: 1px;
                background-color: #999999;
                display: inline-block;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }

            &::before {
                right: -46px;
            }

            &::after {
                left: -46px;
            }

        }
    }
	.module-container{
		opacity: 0;
	    transform: translate(0, 12%);
	    transition: transform 0.5s cubic-bezier(0.555, 0.105, 0.225, 1.26), opacity 0.5s ease-in;
	    animation-name: slideInUp;
	    animation-duration: 0.5s;
	    animation-delay: 0.2s;
	    animation-fill-mode: forwards;
	
	    &::after {
	        content: "";
	        display: block;
	        height: 0;
	        clear: both;
	        visibility: hidden;
	    }
	}
`

