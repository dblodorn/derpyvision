<template>
  <PageWrapper>
    <CanvasWrapper>
      <BouncingBall/>
    </CanvasWrapper>
    <Header/>
    <ThreeBg/>
  </PageWrapper>
</template>

<script>
import { mapState } from 'vuex'
import PageWrapper from '@/components/PageWrapper'
import CanvasWrapper from '@/components/canvas/CanvasWrapper'
import BouncingBall from '@/components/canvas/BouncingBall'
import Header from './Header'
const ThreeBg = () => import(/* webpackChunkName: "three-bg" */ './home/ThreeBg');

// VUE
export default {
  components: {
    PageWrapper,
    CanvasWrapper,
    BouncingBall,
    Header,
    ThreeBg
  },
  computed: {
    ...mapState([
      'apiData'
    ])
  }
}
</script>
