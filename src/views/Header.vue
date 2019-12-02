<template>
  <HeaderWrapper>
    <div class="pdu">DErpYVISION</div>
  </HeaderWrapper>
</template>

<script>
import styled from 'vue-styled-components'
// import * as _ from '@/styles/mixins'
import * as t from '@/styles/theme'

const HeaderWrapper = styled.header`
  overflow: hidden;
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9000;
  border-top: 2px solid ${t.colors.black};
  background-color: ${t.colors.beige};
  padding: ${t.spacing.single_pad};
`

export default {
  props: [
    'Copy'
  ],
  components: {
    HeaderWrapper
  }
}
</script>
