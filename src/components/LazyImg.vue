<template>
  <LazyImgWrapper :cover="fit || 'contain'">
    <img :class="[{ 'show-image' : loaded }, 'lazy-img']" :src="srcImage" v-on:load="imgLoaded"/>
  </LazyImgWrapper>
</template>

<script>
import styled from 'vue-styled-components'
import * as _ from '@/styles/mixins'

// STYLES
const props = {
  cover: String
}

const LazyImgWrapper = styled('div', props)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: block;
  .lazy-img {
    ${_.absoluteTopFull};
    object-fit: ${props => props.cover};
    width: 100%;
    height: 100%;
    opacity: 0;
    will-change: opacity;
    transition: opacity 250ms cubic-bezier(.49,.39,.89,.58) 10ms;
    z-index: 1;
    min-height: 5rem;
    &.show-image {
      opacity: 1;
    }
  }
`

export default {
  props: [
    'src',
    'fit'
  ],
  components: {
    LazyImgWrapper
  },
  data () {
    return {
      loaded: false,
      observer: null,
      intersected: false
    }
  },
  computed: {
    srcImage () {
      return this.intersected ? this.src : ''
    }
  },
  mounted () {
    const config = {
      root: null,
      rootMargin: '0px 0px 1500px 0px',
      threshold: 0
    }
    this.observer = new IntersectionObserver(entries => {
      const image = entries[0]
      if (image.isIntersecting) {
        this.intersected = true
        this.observer.disconnect()
      }
    }, config)
    this.observer.observe(this.$el)
  },
  destroyed () {
    this.observer.disconnect()
  },
  methods: {
    imgLoaded () {
      this.loaded = true
    }
  }
}
</script>
