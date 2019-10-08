<template>
  <CanvasWrapper>
    <canvas ref="vue-canvas"></canvas>
    <slot></slot>
  </CanvasWrapper>
</template>

<script>
import { mapState } from 'vuex'
import styled from 'vue-styled-components'

const CanvasWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  display: block;
  z-index: 100;
`

export default {
  components: {
    CanvasWrapper
  },
  data () {
    return {
      provider: {
        context: null
      }
    }
  },
  provide () {
    return {
      provider: this.provider
    }
  },
  mounted () {
    this.provider.context = this.$refs['vue-canvas'].getContext('2d')
    this.$refs['vue-canvas'].width = this.resizeState.width
    this.$refs['vue-canvas'].height = this.resizeState.height
  },
  computed: {
    ...mapState([
      'resizeState'
    ])
  }
}
</script>
