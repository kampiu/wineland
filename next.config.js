const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const path = require("path")

const DevelopmentConfig = require("./config/config.development")
const ProductionConfig = require("./config/config.production")

const resolve = (dir) => path.resolve(__dirname, dir)

const DefaultConfig = {
	env: {
		// NEXT_PUBLIC_API: "aaaaa"
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		
		config.plugins.push( new LodashModuleReplacementPlugin() )
		
		return config
	},
}

module.exports = process.env.NODE_ENV === "production" ? {
	...DefaultConfig,
	...ProductionConfig,
} : {
	...DefaultConfig,
	...DevelopmentConfig,
}
