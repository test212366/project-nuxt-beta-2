const postprocessing = {
	uniforms: {
		'tDiffuse': {value: null},
		'howmuch': {value: 0},

		'resolution': {value: null},
		'pixelSize': {value: 1.},
		'time': {value: 0}
	},
	vertexShader: `
	varying highp vec2 vUv;

	void main() {
		vUv = uv;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
	`,
	fragmentShader:  /* glsl */`
		uniform sampler2D tDiffuse;
		uniform float pixelSize;
		uniform vec2 resolution;
		uniform float time;
		uniform float howmuch;



 


		float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }


		varying highp vec2 vUv;
		void main() {
 
			vec2 shift = vec2(0.01, .01) * howmuch;

			vec4 t = texture2D(tDiffuse, vUv);
			vec4 t1 = texture2D(tDiffuse, vUv + shift);
			vec4 t2 = texture2D(tDiffuse, vUv - shift);


			vec3 color = vec3((t.r + t.b + t.g) /5.);
			vec3 color1 = vec3((t1.r + t1.b + t1.g) /5.);
			vec3 color2 = vec3((t2.r + t2.b + t2.g) /5.);
			color = vec3(color1.r, color.g, color2.b);

			// float darkness = 0.6;
			// vec2 uv = vUv;
			// vec2 distanceToCenter = vec2(0.3, .7) - uv ;
		
			// float distance = length(distanceToCenter);
			// vec4 colorBlack = texture2D(tDiffuse, uv);
			// colorBlack.rgb *= 1.0 - smoothstep(0., 0.8, distance) * darkness;
			// gl_FragColor = colorBlack;



			float val = hash(vUv + time) * 0.3;


			vec2 dxy = pixelSize / resolution;
			vec2 coord = dxy * floor(vUv / dxy);
			gl_FragColor = texture2D(tDiffuse,vUv);
			gl_FragColor = vec4(color + vec3(val - .37), 1.);

			// vec4 finalColor = mix(colorBlack,vec4(color, 1.), .2 );

			// gl_FragColor = finalColor;
		}
	`
}

export {postprocessing}