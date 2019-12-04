<template>
  <ButtonWrapper>
    <LozengeA href="#" v-scroll-to="{
      el: '#top',
      offset: -80
    }">
      <span>TOP</span>
    </LozengeA>
  </ButtonWrapper>
</template>

<script>
import styled from 'vue-styled-components'
import * as _ from '@/styles/mixins'
import { LozengeA } from '@/styles/components'
const ButtonWrapper = styled.div`
  ${_.flexCenteredAll};
  width: 100%;
`
export default {
  components: {
    ButtonWrapper,
    LozengeA
  }
}
</script>