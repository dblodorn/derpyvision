<template>
  <CloseWrapper>
    <router-link :to="'/'">
      <Close :Color="xColor"/>
    </router-link>
  </CloseWrapper>
</template>

<script>
import styled from 'vue-styled-components'
import { colors } from '@/styles/theme'
import * as _ from '@/styles/mixins'
import Close from './Close'

// STYLES
const CloseWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 12000;
  height: 4rem;
  width: 4rem;
  display: block;
  background-color: white;
  border: 3px solid black;
  ${_.media.desktop`
    height: 5rem;
    width: 5rem;
  `}
  a {
    ${_.linkInit};
    ${_.buttonInit};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    svg {
      ${_.absoluteCentered};
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    ${_.media.hover`
      &:hover {
        animation: Rotation .25s linear infinite;
      }
    `}
  }
`

// VUE
export default {
  name: 'close-back',
  components: {
    Close,
    CloseWrapper
  },
  props: {
    xColor: {
      type: String,
      default: colors.black,
      useDefaultForNull: true
    }
  },
  methods: {
    clicked () {
      this.Method()
    }
  }
}
</script>
