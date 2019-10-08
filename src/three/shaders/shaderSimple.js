export default {
  vertex: `
    void main(){
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    }
  `,
  fragment: `
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;

    float random (in vec2 st) {
      return fract(sin(dot(st.xy, vec2(1.9898,78.233)))*53758.5453123);
    }

    float noise (in vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) +
        (c - a)* u.y * (1.0 - u.x) +
        (d - b) * u.x * u.y;
    }

    #define OCTAVES 6

    float fbm (in vec2 st) {
      float value = 0.0;
      float amplitude = .125;
      float frequency = 0.;
      for (int i = 0; i < 10; i++) {
        value += amplitude * noise(st);
        st *= 50.0;
        amplitude *= .125;
      }
      return value*0.5+0.5;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy/u_resolution.xy;
      float p = 15.*fbm(5.*uv+u_time);
      float q = 11.*fbm(uv * 3.*p + u_time);
      float r = fbm(uv * 5.*q);
      uv = uv-r*p-q;
      vec3 col = 0.5 + 0.5*cos(u_time+uv.xyx+vec3(
        0,
        2,
        3
      ));
      gl_FragColor = vec4(col,1.0);
    }
  `
}
