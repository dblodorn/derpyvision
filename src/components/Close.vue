<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" xml:space="preserve" width="100%" height="100%">
    <g class="nc-icon-wrapper" v-bind:fill="Color">
      <line fill="none" v-bind:stroke="Color" stroke-width="4" stroke-linecap="square" stroke-miterlimit="10" x1="54" y1="10" x2="10" y2="54" stroke-linejoin="miter"></line>
      <line fill="none" v-bind:stroke="Color" stroke-width="4" stroke-linecap="square" stroke-miterlimit="10" x1="54" y1="54" x2="10" y2="10" stroke-linejoin="miter"></line>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'close',
  props: [
    'Color'
  ]
}
</script>
