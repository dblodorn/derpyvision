<template>
  <CopyWrapper>
    <h2>{{SectionNumber}}. {{Data.title}}</h2>
    <StyledMarkup v-html="Data.copy" />
  </CopyWrapper>
</template>

<script>
import { StyledMarkup } from '@/styles/components'
import { CopyWrapper } from './privacy-styles'

export default {
  name: 'AnchorCopy',
  components: {
    StyledMarkup,
    CopyWrapper
  },
  props: [
    'SectionNumber',
    'Data'
  ]
}
</script>
