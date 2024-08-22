import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3074f688 = () => interopDefault(import('..\\pages\\deportes\\index.vue' /* webpackChunkName: "pages/deportes/index" */))
const _72fc0fe7 = () => interopDefault(import('..\\pages\\espectaculos\\index.vue' /* webpackChunkName: "pages/espectaculos/index" */))
const _66fcc829 = () => interopDefault(import('..\\pages\\sucesos\\index.vue' /* webpackChunkName: "pages/sucesos/index" */))
const _04c8ba38 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _2ebe5540 = () => interopDefault(import('..\\pages\\deportes\\_slug.vue' /* webpackChunkName: "pages/deportes/_slug" */))
const _71456e9f = () => interopDefault(import('..\\pages\\espectaculos\\_slug.vue' /* webpackChunkName: "pages/espectaculos/_slug" */))
const _654626e1 = () => interopDefault(import('..\\pages\\sucesos\\_slug.vue' /* webpackChunkName: "pages/sucesos/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/deportes",
    component: _3074f688,
    name: "deportes"
  }, {
    path: "/espectaculos",
    component: _72fc0fe7,
    name: "espectaculos"
  }, {
    path: "/sucesos",
    component: _66fcc829,
    name: "sucesos"
  }, {
    path: "/",
    component: _04c8ba38,
    name: "index"
  }, {
    path: "/deportes/:slug",
    component: _2ebe5540,
    name: "deportes-slug"
  }, {
    path: "/espectaculos/:slug",
    component: _71456e9f,
    name: "espectaculos-slug"
  }, {
    path: "/sucesos/:slug",
    component: _654626e1,
    name: "sucesos-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
