// https://nuxt.com/docs/api/configuration/nuxt-config

import glsl from 'vite-plugin-glsl'

export default defineNuxtConfig({
  devtools: { enabled: true },
//   meta: {
	// link: [
	// 	{
	// 		href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap',
	// 		rel: 'stylesheet',
	// 	},
	// ],
	// },
	// build: {
	// 	//@ts-ignore
	// 	postcss: {
	// 		postcssOptions: require('./postcss.config'),
	// 	},
	// 	transpile: ['three', 'gsap'],
	// },
	// build: {
	// 	//@ts-ignore
	// 	rollupOptions: {
	// 	  external: ['three'],
	// 	},
	//  },
	vite: {
		plugins: [glsl()],
	},
   
})
