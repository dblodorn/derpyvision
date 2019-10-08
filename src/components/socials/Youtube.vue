<template>
  <social-link :href="link" target="_blank" :fillcolor="color">
    <div class="wrapper">
      <svg viewBox="0 0 32 32" width="32" height="32"><title>logo youtube</title><g :fill="color"><path :fill="color" d="M31.7,9.6c0,0-0.3-2.2-1.3-3.2c-1.2-1.3-2.6-1.3-3.2-1.4C22.7,4.7,16,4.7,16,4.7h0c0,0-6.7,0-11.2,0.3 c-0.6,0.1-2,0.1-3.2,1.4c-1,1-1.3,3.2-1.3,3.2S0,12.2,0,14.8v2.4c0,2.6,0.3,5.2,0.3,5.2s0.3,2.2,1.3,3.2c1.2,1.3,2.8,1.2,3.5,1.4 C7.7,27.2,16,27.3,16,27.3s6.7,0,11.2-0.3c0.6-0.1,2-0.1,3.2-1.4c1-1,1.3-3.2,1.3-3.2s0.3-2.6,0.3-5.2v-2.4 C32,12.2,31.7,9.6,31.7,9.6z M12.7,20.2l0-9l8.6,4.5L12.7,20.2z"></path></g></svg>
    </div>
  </social-link>
</template>

<script>
import { SocialLink } from '@/styles/components'

export default {
  components: {
    SocialLink
  },
  props: [
    'link',
    'color'
  ]
}
</script>
