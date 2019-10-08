<template>
  <button @click="clicked" id="play-wrapper" v-bind:style="{ height: Size, width: Size }">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xml:space="preserve" width="100%" height="100%">
      <title>Play</title>
      <g :fill="Color">
        <path :fill="Color" d="M32,1C14.906,1,1,14.907,1,32s13.906,31,31,31s31-13.907,31-31S49.094,1,32,1z M44.573,32.819l-20,14 C24.402,46.939,24.201,47,24,47c-0.158,0-0.316-0.038-0.462-0.113C23.207,46.715,23,46.373,23,46V18 c0-0.373,0.207-0.715,0.538-0.887c0.33-0.171,0.729-0.146,1.035,0.068l20,14C44.841,31.368,45,31.674,45,32 S44.841,32.632,44.573,32.819z"></path>
      </g>
    </svg>
  </button>
</template>

<script>
  /* eslint-disable no-console */
  export default {
    props: {
      Color: {
        type: String,
        default: 'rgba(255,255,255,1)',
        useDefaultForNull: true,
      },
      Size: {
        type: String,
        default: '4rem',
        useDefaultForNull: true,
      },
      Method: {
        type: Function,
        default: () => { console.log('clicked'); },
        useDefaultForNull: true,
      },
    },
    methods: {
      clicked() {
        this.Method();
      },
    },
  };
</script>

<style lang="sass">

  #play-wrapper
    position: absolute
    border: 0
    top: 0
    left: 0
    bottom: 0
    right: 0
    margin: auto
    background-color: rgba(255,255,255,0)
    -webkit-appearance: none
    -webkit-tap-highlight-color: transparent
    border-radius: 0
    padding: 0
    cursor: pointer
    opacity: .7
    transition: opacity 350ms ease-in-out
    will-change: opacity
    &:hover
      opacity: 1
    svg
      width: 100%
      height: 100%

</style>
