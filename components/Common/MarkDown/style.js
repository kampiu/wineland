import styled from "styled-components"

export const MarkDownStyle = styled.div`
	font-size: 15px;
    line-height: 1.6;
    color: #413F3F;

    li {
        list-style: outside;
        margin-bottom: 2px;
    }

    pre {
        position: relative;
        padding-top: 38px !important;

        &::before {
            content: "";
            width: 100%;
            height: 30px;
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
            background-image: url("/images/edit-tool-icon.png");
            background-position: 10px center;
            background-size: 40px auto;
            background-repeat: no-repeat;
        }

        &::-webkit-scrollbar-track {
            background-color: #282C34;
        }
    }

    p {
        code {
            background: #EEEEEE;
            color: #DD1144;
            border: 1px solid #D6D6D6;
            padding: 1px 5px;
            margin: 0 3px;
            font-size: 94%;
            white-space: nowrap;
            text-shadow: 0 1px #FFFFFF;
            border-radius: 3px;
        }
    }

    ol, ul {
        padding-left: 2em;
    }

    img {
        width: auto;
        max-width: 100%;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-bottom: 12px;
        border: 1px solid #F2F2F2;
        border-radius: 8px;
    }

    .highlight pre, pre {
        padding: 16px 24px;
        overflow: auto;
        font-size: 85%;
        line-height: 1.45;
        /*background-color: #f6f8fa;*/
        background-color: #282C34;
        border-radius: 3px;
        color: #ABB2BF;
        font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
    }

    pre > code {
        padding: 0;
        margin: 0;
        font-size: 100%;
        word-break: normal;
        white-space: pre;
        background: transparent;
        border: 0;
    }

    pre code {
        display: inline;
        max-width: auto;
        padding: 0;
        margin: 0;
        overflow: visible;
        line-height: inherit;
        word-wrap: normal;
        background-color: initial;
        border: 0;
        -webkit-user-select: text;
    }

    blockquote, details, dl, ol, p, pre, table, ul {
        margin-top: 0;
        margin-bottom: 16px;
    }

    table {
        width: auto;
        display: table;
        overflow: auto;
        border-spacing: 0;
        border-collapse: collapse;
        font-size: 15px !important;
    }

    table th, table td {
        padding: 6px 13px;
        border: 1px solid #DFE2E5;
    }

    table th {
        font-weight: 600;
    }

    table tr {
        background-color: #FFFFFF;
        border-top: 1px solid #C6CBD1;
    }

    table td {
        word-break: break-all;
    }

    table tr:nth-child(2n) {
        background-color: #F6F8FA;
    }

    > :first-child {
        margin-top: 0 !important;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25;
        color: #333333;
        -webkit-user-select: text;
    }

    h1, h2 {
        padding-bottom: .3em;
        border-bottom: 1px solid #EAECEF;
    }

    h1 {
        font-size: 2em;
        font-weight: 700;
    }

    h2 {
        font-size: 1.5em;
    }

    h3 {
        font-size: 1.25em;
    }
    .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        color: #abb2bf;
        background: #3E4043;
    }

    .hljs-comment,
    .hljs-quote {
        color: #5c6370;
        font-style: normal;
    }

    .hljs-doctag,
    .hljs-keyword,
    .hljs-formula {
        color: #c678dd;
    }

    .hljs-section,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-deletion,
    .hljs-subst {
        color: #e06c75;
    }

    .hljs-literal {
        color: #56b6c2;
    }

    .hljs-string,
    .hljs-regexp,
    .hljs-addition,
    .hljs-attribute,
    .hljs-meta-string {
        color: #98c379;
    }

    .hljs-built_in,
    .hljs-class .hljs-title {
        color: #e6c07b;
    }

    .hljs-attr,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-type,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-number {
        color: #d19a66;
    }

    .hljs-symbol,
    .hljs-bullet,
    .hljs-link,
    .hljs-meta,
    .hljs-selector-id,
    .hljs-title {
        color: #61aeee;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: bold;
    }

    .hljs-link {
        text-decoration: underline;
    }
`

