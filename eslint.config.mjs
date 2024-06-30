// Nuxt ESLint で flat config を設定する
import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	{
		files: ['**/*.vue', '**/*.ts'],
		rules: {
			'no-console': '2',
			'@typescript-eslint/no-explicit-any': '2',
		},
	},
	{
		files: ['**/*.vue'],
		rules: {
			'vue/multi-word-component-names': 0,
			'vue/no-multiple-template-root': '2',
			'vue/require-v-for-key': '2',
			'vue/no-use-v-if-with-v-for': '2',
		},
	},
	stylistic.configs.customize({
		indent: 'tab',
		quotes: 'single',
		semi: false,
	}),
)
