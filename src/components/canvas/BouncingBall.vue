<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex'
// import * as Tone from 'tone'

export default {
  inject: ['provider'],
  props: {
    image: {
      type: String,
      default: '/assets/imgs/derpy-avatar-circle.png'
    },
    y: {
      type: Number,
      default: 94
    },
    x: {
      type: Number,
      default: 0
    },
    dx: {
      type: Number,
      default: 4
    },
    dy: {
      type: Number,
      default: -4
    },
    useBoingSet: {
      type: Boolean,
      default: false
    }
  },
  render() {
    if (!this.provider.context) return
      const ctx = this.provider.context
      let x = this.x
      let y = this.y
      let dx = this.dx
      let dy = this.dy
      let img = new Image()
      img.src = this.image
      console.log(this.image, this.x, this.y, this.dx, this.dy)
      // const synth = new Tone.Synth().toDestination();
      // const now = Tone.now()

      const imgSize = {
        w: 100,
        h: 100
      }

    const drawBall = () => {
        ctx.save()
        ctx.beginPath()
        ctx.arc(x, y, (imgSize.w / 2), 0, Math.PI * 2, false)
        ctx.clip()
        ctx.drawImage(img, (x - imgSize.w / 2), (y - imgSize.w / 2), imgSize.w, imgSize.h)
        ctx.restore()
      }

      const triggerSynth = () => {
        console.log('synth') 
      }

      const draw = () => {
        ctx.clearRect(0, 0, this.provider.context.canvas.clientWidth, this.provider.context.canvas.clientHeight)
        drawBall()
        if(x + dx > this.provider.context.canvas.clientWidth-(imgSize.w / 2) || x + dx < 0) {
          triggerSynth()
          dx = -dx
          if (this.useBoingSet) {
            console.log(this.boings)
            this.setBoing()
          }
        }
        if(y + dy > this.provider.context.canvas.clientHeight-(imgSize.h / 2) || y + dy < 0) {
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
