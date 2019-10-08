<template>
  <div class="img-container">
    <div :class="[{ 'show-image' : loaded }, 'img-wrapper']">
      <img class="cover-img" :src="srcImage" v-on:load="imgLoaded"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        default: '',
        useDefaultForNull: true,
      },
      Color: {
        type: String,
        default: '#000000',
        useDefaultForNull: true,
      },
    },
    data: () => ({
      loaded: false,
      observer: null,
      intersected: false,
    }),
    computed: {
      srcImage() {
        return this.intersected ? this.src : '';
      },
    },
    mounted() {
      const config = {
        root: null,
        rootMargin: '50% 0px 0px 0px',
        threshold: 0,
      };
      this.observer = new IntersectionObserver(entries => {
        const image = entries[0];
        if (image.isIntersecting) {
          this.intersected = true;
          this.observer.disconnect();
        }
      }, config);
      this.observer.observe(this.$el);
    },
    destroyed() {
      this.observer.disconnect();
    },
    methods: {
      imgLoaded() {
        this.loaded = true;
      },
    },
  };
</script>

<style lang="sass">
  @keyframes fadeIn
    from
      opacity: 0
    to
      opactiy: 1

  .img-container
    animation-name: fadeIn
    animation-fill-mode: both
    animation-duration: 350ms
    animation-delay: 10ms
    animation-timing-function: ease-out

  .img-container,
  .img-wrapper,
  .loading-bg
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0

  .img-wrapper
    overflow: hidden
    opacity: 0
    will-change: opacity
    transition: opacity 400ms cubic-bezier(.49,.39,.89,.58) 10ms
    z-index: 1

  .show-image
    opacity: 1

  .cover-img
    position: absolute
    margin: auto
    right: 0
    top: 0
    left: 0
    bottom: 0
    display: block
    width: 100%
    height: 100%
    object-fit: cover

</style>
