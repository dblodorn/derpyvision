import Vue from 'vue'
import Vuex from 'vuex'
import NProgress from 'nprogress'
import axios from 'axios'
import bowser from 'bowser'
import throttle from 'lodash/throttle'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'
import fetchWpOptions from './controllers/fetchWpOptions'

mixin(_, {
  throttle: throttle
})

Vue.use(Vuex)

let lastScrollTop = 0

export default new Vuex.Store({
  state: {
    apiData: false,
    siteLoaded: false,
    pageHistory: false,
    boings: 0,
    pageClicks: 0,
    showMenu: true,
    touchState: false,
    resizeState: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    scrollState: {
      y_offset: 0,
      scroll_direction: null,
      hide_header: false
    },
    scrollDirection: null,
    userAgent: {},
    hoverState: {
      slug: null,
      hovered: false
    }
  },
  actions: {
    GET_API_DATA ({ commit }) {
      NProgress.configure({ easing: 'ease', speed: 500 })
      NProgress.start()
      fetchWpOptions()
        .then(response => response.json())
        .then((payload) => {
          commit('SET_API_DATA', { list: payload })
          setTimeout(() => {
            commit('SET_SITE_LOADED', { bool: true })
          }, 3000)
          NProgress.done()
        })
    },
    GET_TOUCH_STATE ({ commit }) {
      window.addEventListener('touchstart', function onFirstTouch () {
        document.body.classList.add('user-is-touching')
        commit('SET_TOUCH_STATE', { bool: true })
        window.removeEventListener('touchstart', onFirstTouch, false)
      }, false)
    },
    GET_RESIZE_STATE ({ commit }) {
      const resizeHandler = () => {
        commit('SET_RESIZE_STATE', {
          data: {
            width: window.innerWidth,
            height: window.innerHeight
          }
        })
      }
      resizeHandler()
      window.addEventListener('resize', _.throttle(resizeHandler, 50), false)
    },
    GET_USER_AGENT ({ commit }) {
      commit('SET_USER_AGENT', {
        data: {
          name: bowser.name,
          version: bowser.version,
          os: bowser.osname,
          mobile: bowser.mobile,
          tablet: bowser.tablet
        }
      })
    },
    GET_SCROLL_STATE ({ commit }) {
      const scrollHandler = () => {
        const scrollTop = (window.pageYOffset !== undefined)
          ? window.pageYOffset
          : (document.documentElement || document.body.parentNode || document.body).scrollTop
        const hideHeader = () => {
          if (scrollTop >= 150) {
            return true
          } else {
            return false
          }
        }
        if (scrollTop > lastScrollTop) {
          commit('SET_SCROLL_DIRECTION', {
            direction: 'down'
          })
        } else {
          commit('SET_SCROLL_DIRECTION', {
            direction: 'up'
          })
        }
        lastScrollTop = scrollTop
        commit('SET_SCROLL_STATE', {
          data: {
            y_offset: scrollTop,
            hide_header: hideHeader()
          }
        })
      }
      scrollHandler()
      window.addEventListener('scroll', _.throttle(scrollHandler, 25), false)
    },
    GET_PAGE_HISTORY ({ commit }, data) {
      commit('SET_PAGE_HISTORY', { pgname: data })
    },
    GET_MENU_STATE ({ commit }, data) {
      commit('SET_MENU_STATE', { bool: data })
    },
    GET_PAGE_COUNT ({ commit }) {
      commit('SET_PAGE_COUNT')
    },
    GET_BOINGS ({ commit }) {
      commit('SET_BOINGS')
    }
  },
  mutations: {
    SET_SITE_LOADED: (state, { bool }) => {
      state.siteLoaded = bool
    },
    SET_PAGE_COUNT: (state) => {
      state.pageClicks = state.pageClicks + 1
    },
    SET_BOINGS: (state) => {
      state.boings = state.boings + 1
    },
    SET_API_DATA: (state, { list }) => {
      state.apiData = list
    },
    SET_TOUCH_STATE: (state, { bool }) => {
      state.touchState = bool
    },
    SET_RESIZE_STATE: (state, { data }) => {
      state.resizeState = data
    },
    SET_SCROLL_STATE: (state, { data }) => {
      state.scrollState = data
    },
    SET_SCROLL_DIRECTION: (state, { direction }) => {
      state.scrollDirection = direction
    },
    SET_USER_AGENT: (state, { data }) => {
      state.userAgent = data
    },
    SET_PAGE_HISTORY: (state, { pgname }) => {
      state.pageHistory = pgname
    },
    SET_MAIN_MENU_STATE: (state, { bool }) => {
      state.showMenu = bool
    }
  }
})
