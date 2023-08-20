<template>
  <PageWrapper>
    <CanvasWrapper>
      <BouncingBall image="/assets/imgs/wall-flower.png" :y=0 :x=50 :dx=20 :dy=-2 />
    </CanvasWrapper>
    <CanvasWrapper>
      <BouncingBall image="/assets/imgs/confuser.png" :dy=-50 />
    </CanvasWrapper>
    <CanvasWrapper>
      <BouncingBall image="/assets/imgs/peace-symbol.png" :y=0 :x=50 :dx=10 :dy=-10 :useBoingSet=true />
    </CanvasWrapper>
    <CanvasWrapper>
      <BouncingBall image="/assets/imgs/timmy.png" :y=0 :x=20 :dx=10 :dy=-20 />
    </CanvasWrapper>
    <CanvasWrapper>
      <BouncingBall image="/assets/imgs/chime.png" :y=0 :x=200 :dx=-5 :dy=-15 />
    </CanvasWrapper>
    <CanvasWrapper>
      <BouncingBall image="/assets/imgs/dmbk_01.png" :dx=-50 />
    </CanvasWrapper>
    <CanvasWrapper>
      <BouncingBall image="/assets/imgs/flower-child.png" :dx=3 :dy=-12 />
    </CanvasWrapper>
    <CanvasWrapper>
      <BouncingBall image="/assets/imgs/girrafffeeee.png" :dx=-3 :dy=10 />
    </CanvasWrapper>
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
