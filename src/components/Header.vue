<template>
  <header-wrapper :class="{ 'hide': (scrollState.hide_header == true) }">
    <div class="logo-wrapper">
      <FcLogo/>
      <div class="count">
        <span>{{pageClicks}}</span>
      </div>
    </div>
    <div class="nav-wrapper">
      <main-nav id="nav">
        <router-link v-for="(item, i) in navigation" v-bind:key="`${i}-nav`" :to="item.path">
          <span>{{item.title}}</span>
        </router-link>
      </main-nav>
    </div>
  </header-wrapper>
</template>

<script>
import { mapState } from 'vuex'
import styled from 'vue-styled-components'
import * as _ from '@/styles/mixins'
import { fonts, heights, spacing, shared } from '@/styles/theme'
import FcLogo from './FcLogo'

// STYLES
const HeaderWrapper = styled.header`
  ${_.flexColumn};
  width: 100%;
  height: ${heights.header};
  border-bottom: ${shared.border};
  z-index: 9000;
  position: fixed;
  background-color: white;
  transition: opacity 500ms ease-in-out;
  will-change: opacity;
  &.hide {
    opacity: 0;
    pointer-events: none;
  }
  .logo-wrapper,
  .nav-wrapper {
    width: 100%;
  }
  .nav-wrapper {
    ${_.flexCenteredAll};
    height: ${heights.footer};
  }
  .logo-wrapper {
    ${_.flexRow};
    justify-content: space-between;
    padding: ${spacing.single_pad};
    border-bottom: ${shared.border};
    height: calc(${heights.header} - ${heights.footer});
  }
  .count {
    height: 100%;
    font-family: ${fonts.circular_book};
    font-size: 2rem;
    ${_.flexCenteredAll};
  }
`

const MainNav = styled.nav`
  ${_.flexRow};
  justify-content: space-between;
  width: 100%;
  padding: 0 10%;
  a {
    ${_.linkInit};
    font-family: ${fonts.circulat_book};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.5rem;
    text-align: center;
    color: black;
    margin-right: 2rem;
    &:last-child {
      margin-right: 0;
    }
    &.router-link-exact-active {
      color: red;
      pointer-events: none;
    }
  }
`

// VUE
export default {
  components: {
    MainNav,
    HeaderWrapper,
    FcLogo
  },
  computed: {
    ...mapState([
      'scrollState',
      'pageClicks'
    ])
  },
  data () {
    return {
      navigation: [
        {
          path: '/about',
          title: 'About'
        },
        {
          path: '/artists',
          title: 'Artists'
        },
        {
          path: '/releases',
          title: 'Releases'
        },
        {
          path: '/news',
          title: 'News'
        }
      ],
      permalinks: [
        {
          url: 'http://futureclassicpresents.com/',
          title: 'Events'
        },
        {
          url: 'http://residency.futureclassic.com/',
          title: 'Residency'
        },
        {
          url: 'http://futureclassicshop.com/',
          title: 'Shop'
        }
      ]
    }
  }
}
</script>
