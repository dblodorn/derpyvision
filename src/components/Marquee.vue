<template>
  <MarqueeWrapper>
    <marquee-text :duration="5" :repeat="15">
      <span v-html="Copy"/>
    </marquee-text>
  </MarqueeWrapper>
</template>

<script>
import styled from 'vue-styled-components'
import * as _ from '@/styles/mixins'

const MarqueeWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  span {
    ${_.mabryBold};
    font-size: 2.75rem;
    text-transform: uppercase;
  }
`

export default {
  props: [
    'Copy'
  ],
  components: {
    MarqueeWrapper
  }
}
</script>
