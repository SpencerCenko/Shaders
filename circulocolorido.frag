#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
    /*
    vec2 st = gl_FragCoord.xy/u_resolution;
    float v1 = abs(sin((st.x + st.y) - u_time));
    float v2 = abs(sin(st.y + u_time * 0.5));
    float v3 = abs(sin(st.x - u_time * 1.2));
    vec3 corfinal = vec3(v1 * v2, v2 * v3, v3 * v1);
    
    gl_FragColor = vec4(abs(sin((st.x + st.y) - u_time)), abs(sin(st.y + u_time * 0.5)), abs(sin(st.x - u_time * 1.2)), 1.0);
    */
    float movimento = (sin(u_time * 2.0) * 0.1) + (sin(u_time * 0.5) * 0.5);
    
    vec2 mousep = u_mouse.xy/u_resolution;
    vec2 fc = gl_FragCoord.xy/u_resolution;
    
    float pulso = - abs(sin(u_time * 1.5) * 0.025);
    
    float d = distance(fc, mousep);
    /*
    float de = 1.0 - smoothstep(0.3 - 0.05, 0.26, d) - (1.0 - smoothstep(0.14 - 0.07, 0.09, d));
    float de2 = 0.0;
    float de3 = 0.0;
    */
    float circulob = 1.0 - smoothstep(0.1, 0.105, d + pulso) - (1.0 - smoothstep(0.07, 0.075, d));
    float circulog = 1.0 - smoothstep(0.07, 0.075, d + pulso) - (1.0 - smoothstep(0.035, 0.04, d));
    float circulor = 1.0 - smoothstep(0.035, 0.04, d + pulso);
    gl_FragColor = vec4(circulor, circulog, circulob, 1.0);
    
    

    
}
