<template>
  <social-link :href="link" target="_blank" :fillcolor="color">
    <div class="wrapper">
      <svg viewBox="0 0 32 32" width="32" height="32"><title>logo spotify</title><g :fill="color"><path :fill="color" d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.9,0,16,0z M23.4,23.1c-0.3,0.5-0.9,0.6-1.4,0.3 c-3.8-2.3-8.5-2.8-14.1-1.5c-0.6,0.2-1-0.2-1.2-0.7c-0.2-0.6,0.2-1,0.7-1.2c6.1-1.4,11.4-0.8,15.5,1.8C23.5,22,23.6,22.6,23.4,23.1z M25.3,18.7c-0.4,0.6-1.1,0.8-1.7,0.4c-4.3-2.6-10.9-3.4-15.9-1.8c-0.6,0.2-1.4-0.2-1.5-0.8C6,15.8,6.3,15.1,7,15 c5.8-1.8,13-0.9,18,2.2C25.4,17.4,25.7,18.2,25.3,18.7z M25.4,14.2c-5.1-3-13.7-3.4-18.6-1.8c-0.8,0.2-1.6-0.2-1.8-1 c-0.2-0.8,0.2-1.6,1-1.8c5.7-1.7,15-1.4,21,2.2c0.7,0.4,1,1.4,0.6,2.1C27.1,14.4,26.2,14.6,25.4,14.2z"></path></g></svg>
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
