/** @type {import("next").NextConfig} */
const withLess = require("next-with-less")

const nextConfig = withLess({
	images: {
		domains: [ "image.billson.club" ],
	},
	lessLoaderOptions: {
		additionalData: `@import "@/assets/styles/variables.less";@import "@/assets/styles/mixins.less";`,
		lessOptions: {
			javascriptEnabled: true,
			localIdentName: "[name]_[hash:base64:10]",
		},
	},
	webpack: (config) => {
		const rules = config.module.rules
			.find((rule) => typeof rule.oneOf === "object")
			.oneOf.filter((rule) => Array.isArray(rule.use))
		rules.forEach((rule) => {
			rule.use.forEach((moduleLoader) => {
				if (
					moduleLoader.loader !== undefined &&
					moduleLoader.loader.includes("css-loader") &&
					typeof moduleLoader.options.modules === "object"
				) {
					moduleLoader.options = {
						...moduleLoader.options,
						modules: {
							...moduleLoader.options.modules,
							// This is where we allow camelCase class names
							exportLocalsConvention: "camelCase",
						},
					}
				}
			})
		})
		
		return config
	},
})

module.exports = nextConfig
