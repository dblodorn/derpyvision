<template>
  <ThreeDiv/>
</template>

<script>
import styled from 'vue-styled-components'
import threeShaderBg from '@/three/threeShaderBg'

const ThreeDiv = styled.div`
  display: none;
`

export default {
  components: {
    ThreeDiv
  },
  mounted: () => {
    threeShaderBg()
  },
}
</script>
