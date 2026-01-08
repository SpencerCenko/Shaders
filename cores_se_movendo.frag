#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
    
    vec2 st = gl_FragCoord.xy/u_resolution;
    float v1 = abs(sin((st.x + st.y) - u_time));
    float v2 = abs(sin(st.y + u_time * 0.5));
    float v3 = abs(sin(st.x - u_time * 1.2));
    vec3 corfinal = vec3(v1 * v2, v2 * v3, v3 * v1);
    gl_FragColor = vec4(abs(sin((st.x + st.y) - u_time)), abs(sin(st.y + u_time * 0.5)), abs(sin(st.x - u_time * 1.2)), 1.0);
    
    /*
    float movimento = (sin(u_time * 2.0) * 0.1) + (sin(u_time * 0.5) * 0.5);
    float pulso = (sin(u_time * 2.0) * 5.0);
    vec2 mousep = u_mouse.xy;
    vec2 fc = gl_FragCoord.xy;
    
    float d = distance(fc, mousep);
    float de = step(d, 40.0 + pulso) - step(d, 25.0);
    float de2 = step(d, 25.0 + pulso) - step(d, 15.0);
    float de3 = step(d, 15.0 + pulso);
    gl_FragColor = vec4(de3, de2, de, 1.0);
    */
    

    
}
