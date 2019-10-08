<template>
  <footer-wrapper :class="apiData && 'show'">
    <div v-if="apiData" id="footer-wrapper">
      <div id="cr">
        <span class="date">&#169; {{ new Date().getFullYear() }} WILDER</span>
        <router-link :to="'/privacy'"><span>PRIVACY</span></router-link>
      </div>
      <div id="socials">
        <Facebook :link="apiData.options.socials.facebook"/>
        <Instagram :link="apiData.options.socials.instagram"/>
        <Soundcloud :link="apiData.options.socials.soundcloud"/>
        <Spotify :link="apiData.options.socials.spotify"/>
        <Twitter :link="apiData.options.socials.twitter"/>
        <Youtube :link="apiData.options.socials.youtube"/>
      </div>
    </div>
  </footer-wrapper>
</template>

<script>
import { mapState } from 'vuex'
import styled from 'vue-styled-components'
import * as _ from '@/styles/mixins'
import { heights, spacing } from '@/styles/theme'
import Facebook from './socials/Facebook'
import Instagram from './socials/Instagram'
import Soundcloud from './socials/Soundcloud'
import Spotify from './socials/Spotify'
import Twitter from './socials/Twitter'
import Youtube from './socials/Youtube'

// STYLES
const FooterWrapper = styled.footer`
  ${_.flexColumn};
  width: 100%;
  height: ${heights.footer};
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9000;
  transform: translateY(${heights.footer});
  border-top: 2px solid black;
  transition: transform 250ms ease-in 1000ms;
  &.show {
    transform: translateY(0);
  }
  #footer-wrapper {
    width: 100%;
    ${_.flexRow};
    justify-content: space-between;
  }
  #cr {
    height: 100%;
    padding: ${spacing.single_pad};
    ${_.flexCenteredAll};
    ${_.microType};
    .date {
      &:after {
        content: '/';
        margin-left: .5rem;
      }
    }
    a {
      margin-left: .5rem;
    }
  }
  #socials {
    ${_.flexRow};
  }
  * {
    ${_.mediumFont};
    color: black;
  }
`

// VUE
export default {
  components: {
    FooterWrapper,
    Facebook,
    Instagram,
    Soundcloud,
    Spotify,
    Twitter,
    Youtube
  },
  computed: {
    ...mapState([
      'apiData',
      'scrollState'
    ])
  }
}
</script>
