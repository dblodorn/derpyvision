/* eslint-disable */
import store from './../store'
import * as THREE from 'three'
import shaderBlob from './shaders/shaderBlob'
import shaderBlobTwo from './shaders/shaderBlobTwo'

class MathUtils {
  lerp(a, b, n) {
    return n * (b - a) + a
  }
}

const shaderArray = [
  shaderBlob,
  shaderBlobTwo,
]

class WebGL {
  constructor() {
    // Shader Sequence
    this.shaderCount = shaderArray.length
    this.oldBoing = 0
    this.boingIndex = 0

    // SETUP
    this.width = innerWidth
    this.height = innerHeight
    this.container = document.querySelector('#three-wrapper')
    this.renderer = new THREE.WebGLRenderer()
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.1,
      20000
    )

    this.container.appendChild(this.renderer.domElement)
    this.scene = new THREE.Scene()
    this.clock = new THREE.Clock()
    this.scene.background = new THREE.Color(0xff69b4)
    this.scene.fog = new THREE.FogExp2( 0xaaccff, 0.0007 )
    this.geometry = undefined
    this.mesh = undefined
    this.position = undefined
    this.material = undefined
    this.shader = shaderArray[this.boingIndex]
    this.uniforms = {
      u_time: { type: 'f', value: 0 },
      u_resolution: {
        type: 'v2',
        value: new THREE.Vector2(
          this.width,
          this.height
        )
      }
    }

    this.mouse = {
      x: 0,
      y: 0
    }

    this.math = new MathUtils()
    this.onMouse = this.onMouse.bind(this)
    this.onResize = this.onResize.bind(this)
    this.update = this.update.bind(this)
  }

  init() {
    this.renderer.setSize(this.width, this.height)
    this.camera.position.set(0, 0, 1)
    this.scene.add(this.camera)
    this.addMesh()
    this.onResize()
    this.update()
    this.container.addEventListener('mousemove', this.onMouse)
    window.addEventListener('resize', this.onResize)
  }

  updateMesh() {
    this.scene.remove(this.mesh)
    this.mesh.geometry.dispose()
    this.mesh.material.dispose()
    this.mesh = undefined
    this.onResize()
    this.addMesh()
  }

  addMesh() {
    console.log(this.boingIndex)
    this.shader = shaderArray[this.boingIndex]
    this.geometry = new THREE.PlaneBufferGeometry(this.width, this.height, 1, 1)
    // this.position = this.geometry.attributes.position
    // this.position.dynamic = true
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.shader.vertex,
      fragmentShader: this.shader.fragment
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.mesh)
  }

  onMouse({ clientX, clientY }) {
    this.mouse = {
      x: clientX,
      y: clientY
    }
  }

  onResize() {
    const w = innerWidth
    const h = innerHeight
    this.uniforms.u_resolution.value.x = w
    this.uniforms.u_resolution.value.y = h
    this.renderer.setSize(w, h)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  draw() {
    this.renderer.render(this.scene, this.camera)
    if ( store.state.boings > this.oldBoing ) {
      this.boingIndex < this.shaderCount - 1 ? this.boingIndex = this.boingIndex + 1 : this.boingIndex = 0
      this.shader = shaderArray[this.boingIndex]
      this.oldBoing = store.state.boings
      this.updateMesh()
    }
    this.mesh.rotation.x += 0.005;
    this.mesh.rotation.y += 0.01;
  }

  update() {
    this.uniforms.u_time.value = this.clock.getElapsedTime()
    this.draw()
    requestAnimationFrame(this.update)
  }
}

const webgl = new WebGL()

export default () => {
  webgl.init()
}
