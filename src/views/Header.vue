<template>
  <HeaderWrapper>
    <div class="pdu">{{title}}</div>
    <data>{{apiData.intro}}</data>
  </HeaderWrapper>
</template>

<script>
import { mapState } from 'vuex'
import styled from 'vue-styled-components'
// import * as _ from '@/styles/mixins'
import * as t from '@/styles/theme'

const HeaderWrapper = styled.header`
  overflow: hidden;
  height: 8rem;
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
  data {
    display: none;
  }
`

export default {
  props: [
    'Copy'
  ],
  data () {
    return {
      title: process.env.APP_TITLE
    }
  },
  components: {
    HeaderWrapper
  },
  computed: {
    ...mapState([
      'apiData'
    ])
  }
}
</script>
