<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex'

export default {
  inject: ['provider'],
  render () {
    if (!this.provider.context) return
      const dpi = window.devicePixelRatio
      const canvas = this.provider.context.canvas
      const ctx = this.provider.context
      const ballRadius = 20
      let x = 0
      let y = 94
      let dx = 4
      let dy = -4
      let img = new Image()
      img.src = '/assets/imgs/derpy-avatar-circle.png'

      const imgSize = {
        w: 150 / 1.5,
        h: 150 / 1.5
      }

      const drawBall = () => {
        ctx.drawImage(img, x, y, imgSize.w, imgSize.h)
      }

      const draw = () => {
        ctx.clearRect(0, 0, this.provider.context.canvas.clientWidth, this.provider.context.canvas.clientHeight)
        drawBall()
        if(x + dx > this.provider.context.canvas.clientWidth-imgSize.w || x + dx < -5) {
          dx = -dx
          this.setBoing()
        }
        if(y + dy > this.provider.context.canvas.clientHeight-imgSize.h || y + dy < -5) {
          dy = -dy
        }
        x += dx
        y += dy
      }

      const update = () => {
        draw()
        requestAnimationFrame(() => {
          update()
        })
      }

      update()
  },
  methods: {
    ...mapActions({
      setBoing: 'GET_BOINGS'
    })
  },
  computed: {
    ...mapState([
      'resizeState',
      'boings'
    ])
  }
}
</script>
