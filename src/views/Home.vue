<template>
  <PageWrapper>
    <CanvasWrapper>
      <BouncingBall/>
    </CanvasWrapper>
  </PageWrapper>
</template>

<script>
import { mapState } from 'vuex'
import PageWrapper from '@/components/PageWrapper'
import CanvasWrapper from '@/components/canvas/CanvasWrapper'
import BouncingBall from '@/components/canvas/BouncingBall'

// VUE
export default {
  components: {
    PageWrapper,
    CanvasWrapper,
    BouncingBall
  },
  computed: {
    ...mapState([
      'apiData'
    ])
  }
}
</script>
