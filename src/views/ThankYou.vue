<template>
  <!-- eslint-disable -->
  <PageWrapper :bgColor="'transparent'">
    <CloseBack :xColor="xColor"/>
    <TitleWrapper :typecolor="xColor">
      <StyledTitle>Thank You For Signing Up!</StyledTitle>
    </TitleWrapper>
  </PageWrapper>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
import styled from 'vue-styled-components'
import * as _ from '@/styles/mixins'
import { StyledTitle, SectionWrap } from '@/styles/components'
import { colors } from '@/styles/theme'
import PageWrapper from '@/components/PageWrapper'
import CloseBack from '@/components/CloseBack'

const props = {
  typecolor: String
}

const TitleWrapper = styled('div', props)`
  ${_.flexCenteredAll};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  * {
    color: ${props => props.typecolor}!important;
  }
`

// VUE
export default {
  components: {
    StyledTitle,
    SectionWrap,
    PageWrapper,
    CloseBack,
    TitleWrapper
  },
  data () {
    return {
      colorBg: colors.fc[5],
      xColor: colors.fc[3]
    }
  },
  computed: {
    ...mapState([
      'apiData'
    ])
  }
}
</script>
