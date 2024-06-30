// Nuxt ESLint で flat config を設定する
import stylistic from '@stylistic/eslint-plugin'

export default [
  stylistic.configs.customize({
    // 下はデフォルト値
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
  }),
]
