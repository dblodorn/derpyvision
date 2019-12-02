<template>
  <PageWrapper>
    <CanvasWrapper>
      <BouncingBall/>
    </CanvasWrapper>
    <Header/>
  </PageWrapper>
</template>

<script>
import { mapState } from 'vuex'
import PageWrapper from '@/components/PageWrapper'
import CanvasWrapper from '@/components/canvas/CanvasWrapper'
import BouncingBall from '@/components/canvas/BouncingBall'
import Header from './Header'

// VUE
export default {
  components: {
    PageWrapper,
    CanvasWrapper,
    BouncingBall,
    Header
  },
  computed: {
    ...mapState([
      'apiData'
    ])
  }
}
</script>
