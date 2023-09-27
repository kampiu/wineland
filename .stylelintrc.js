module.exports = {
	customSyntax: "postcss-less",
	extends: [
		"stylelint-config-standard",
		"stylelint-config-recess-order",
		"stylelint-config-recommended-less",
		"stylelint-prettier/recommended",
	],
	rules: {
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global", "local"],
			},
		],
		"declaration-block-no-redundant-longhand-properties": null,
		"selector-class-pattern": null,
		"no-descending-specificity": null,
		"font-family-no-missing-generic-family-keyword": null,
		"function-no-unknown": null,
		"import-notation": null,
	},
}
