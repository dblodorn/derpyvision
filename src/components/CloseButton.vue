<template>
  <close-wrapper>
    <button @click="clicked">
      <Close :Color="xColor"/>
    </button>
  </close-wrapper>
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
  height: 4.5rem;
  width: 4.5rem;
  display: block;
  ${_.media.desktop`
    height: 6rem;
    width: 6rem;
  `}
  button {
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
    Method: {
      type: Function,
      default: () => { console.log('clicked') },
      useDefaultForNull: true
    },
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
