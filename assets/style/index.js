/*
 * 具体的媒体查询
 */
export const ScreenXs = "480px"
export const ScreenSm = "768px"
export const ScreenMd = "992px"
export const ScreenLg = "1200px"
export const ScreenMax = "1920px"

export const ColorA = "#2971FF";

/* -- 多行省略 -- */
export const fontBreak = (line = 1, lineHeight = "0.24rem") => `
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: ${ line };
	line-height: ${ lineHeight };
`







