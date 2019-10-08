<template>
  <full-window-wrapper
    :height="resizeState.height"
    :zindex="zIndex || 0"
    :position="'fixed'"
    :bgcolor="bgcolor || '#FFFFFF'"
    class="full-window-wrapper"
  >
    <slot></slot>
  </full-window-wrapper>
</template>

<script>
import { mapState } from 'vuex'
import styled from 'vue-styled-components'

const wrapperProps = {
  height: Number,
  zindex: Number,
  position: String,
  bgcolor: String
}

const FullWindowWrapper = styled('div', wrapperProps)`
  height: ${props => props.height}px;
  z-index: ${props => props.zindex};
  position: ${props => props.position};
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${props => props.bgcolor};
  display: block;
  opacity: 1;
  transform: scale(1);
  transition: opacity 200ms ease-in-out, transform 250ms ease-in-out;
  will-change: opacity, transform;
  &.fade-enter {
    opacity: 0;
    transform: scale(1.25);
  }
  &.fade-leave-active {
    opacity: 0;
    transform: scale(.95);
  }
`

export default {
  props: [
    'bgcolor',
    'zIndex'
  ],
  components: {
    FullWindowWrapper
  },
  computed: {
    ...mapState([
      'resizeState'
    ])
  }
}
</script>
