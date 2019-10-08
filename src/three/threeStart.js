/* eslint-disable */
import store from './store'
import * as THREE from 'three'
import shaders from './shaders'

class MathUtils {
  lerp(a, b, n) {
    return n * (b - a) + a;
  }
}

class WebGL {
  constructor() {
    this.width = innerWidth;
    this.height = innerHeight;
    this.container = document.querySelector('#three-wrapper')
    this.renderer = new THREE.WebGLRenderer();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.1,
      1000
    );
    this.container.appendChild(this.renderer.domElement)
    this.scene = new THREE.Scene();
    this.loader = new THREE.TextureLoader();
    this.clock = new THREE.Clock();

    this.uniforms = {
      u_time: { type: 'f', value: 0 },
      u_resolution: {
        type: 'v2',
        value: new THREE.Vector2(
          this.width, this.height
        )
      },
      u_mouse: { type: 'v2', value: new THREE.Vector2(0, 0) },
      u_text0: {
        type: 't',
        value: this.loader.load('imgs/wilder-logo.png')
      }
    };
    this.mouse = {
      x: 0,
      y: 0
    };
    this.math = new MathUtils();
    this.onMouse = this.onMouse.bind(this);
    this.onResize = this.onResize.bind(this);
    this.update = this.update.bind(this);
  }

  init() {
    this.renderer.setSize(this.width, this.height);
    this.camera.position.set(0, 0, 1);
    this.scene.add(this.camera);
    this.addMesh();
    this.onResize();
    this.update();
    this.container.addEventListener('mousemove', this.onMouse);
    window.addEventListener('resize', this.onResize);
    console.log('VUE STORE:: ', store)
  }

  addMesh() {
    const geometry = new THREE.PlaneBufferGeometry(2, 2, 60, 60);
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: shaders.vertex,
      fragmentShader: shaders.fragment
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  onMouse({ clientX, clientY }) {
    this.mouse = {
      x: clientX,
      y: clientY
    };
  }

  onResize() {
    const w = innerWidth;
    const h = innerHeight;
    this.uniforms.u_resolution.value.x = w;
    this.uniforms.u_resolution.value.y = h;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    if (w / h > 1) {
      this.mesh.scale.x = this.mesh.scale.y = 1.05 * w / h;
    }
    this.camera.updateProjectionMatrix();
    console.log('resize')
  }

  update() {
    this.uniforms.u_time.value = this.clock.getElapsedTime();
    this.uniforms.u_mouse.value.x = this.math.lerp(
      this.uniforms.u_mouse.value.x,
      this.mouse.x,
      0.05
    );
    this.uniforms.u_mouse.value.y = this.math.lerp(
      this.uniforms.u_mouse.value.y,
      this.mouse.y,
      0.05
    );
    this.draw();
    requestAnimationFrame(this.update);
  }
  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}

const webgl = new WebGL()

export default () => {
  webgl.init();
}
