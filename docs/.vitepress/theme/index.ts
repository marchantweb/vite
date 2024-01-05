import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import './custom.scss'
import AsideSponsors from './components/AsideSponsors.vue'
import SvgImage from './components/SvgImage.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-before': () => h(AsideSponsors),
    })
  },
  enhanceApp({ app }) {
    app.component('SvgImage', SvgImage)
  },
} satisfies Theme
