<template>
  <full-window>
  </full-window>
</template>

<script>
import FullWindow from '@/components/FullWindow'

export default {
  components: {
    FullWindow
  },
  data () {
    return {
      title: process.env.APP_TITLE
    }
  }
}
</script>
