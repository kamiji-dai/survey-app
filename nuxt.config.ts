// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxt/eslint',
	],
	eslint: {
		config: {
			// Nuxt ESLint で Stylistic を設定する
			stylistic: {
				indent: 2,
				quotes: 'single',
				semi: false,
				jsx: true,
			},
		},
	},
})
