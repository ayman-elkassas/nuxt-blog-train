export { default as AppFooter } from '../..\\components\\AppFooter.vue'
export { default as AppHeader } from '../..\\components\\AppHeader.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as VuesaxLogo } from '../..\\components\\VuesaxLogo.vue'

export const LazyAppFooter = import('../..\\components\\AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => c.default || c)
export const LazyAppHeader = import('../..\\components\\AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyVuesaxLogo = import('../..\\components\\VuesaxLogo.vue' /* webpackChunkName: "components/vuesax-logo" */).then(c => c.default || c)
