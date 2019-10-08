export default {
  vertex: `
    varying vec2 vUv;

    void main(){
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    }
  `,
  fragment: `
    #define PI 3.14159265359
    #define PI2 6.28318530718
    #define S(a,b,n) smoothstep(a,b,n)

    uniform float u_time;
    
    uniform vec2 u_resolution;    
    uniform vec2 u_mouse;

    uniform sampler2D u_text0;

    varying vec2 vUv;
    
    //https://github.com/Jam3/glsl-fast-gaussian-blur
    vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
      vec4 color = vec4(0.0);
      vec2 off1 = vec2(1.411764705882353) * direction;
      vec2 off2 = vec2(3.2941176470588234) * direction;
      vec2 off3 = vec2(5.176470588235294) * direction;
      color += texture2D(image, uv) * 0.1964825501511404;
      color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
      color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
      color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
      color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
      color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
      color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
      return color;
    }

    void main(){
      vec2 uv = vUv;
      vec2 st = gl_FragCoord.xy / u_resolution;
      vec2 m = u_mouse;
      
      st.x *= u_resolution.x / u_resolution.y;
      m.x *= u_resolution.x / u_resolution.y;
        
      vec2 m_rel = vec2(m.x,u_resolution.y - m.y) / u_resolution;         
      float d = distance(st, m_rel);
    
      float e = S(.3, .01, d);

      vec2 pst = vec2(abs(uv * 2. - 1.));

      float x = pst.y * 20. + u_time * 2.;
      float y = pst.x * 20. + u_time * .5;
    
      float posx = cos(x+y) * .5 * cos(y); 
      float posy = sin(x-y) * .5 * cos(y);

      vec2 dist = vec2(uv.x + posx * e / 50., uv.y + posy * e / 50.);
      
      vec4 blur = blur13(u_text0, dist, u_resolution, vec2(1., 1.));

      vec4 color = texture2D(u_text0, dist);
    
      gl_FragColor = mix(color,blur,e);
    }
  `
}
