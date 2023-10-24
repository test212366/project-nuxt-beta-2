uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying float vNoise;

float PI = 3.1415926;
void main() {
	vec3 X = dFdx(vPosition);
	vec3 Y = dFdy(vPosition);
	vec3 n = normalize(cross(X, Y));
	gl_FragColor = vec4(n, 1.);
}