	
	import * as THREE from 'three'
	import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
	import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader' 
	// import GUI from 'lil-gui'
	import gsap from 'gsap'
	//@ts-ignore
	import fragmentShader from '../shaders/fragment.frag';
 	//@ts-ignore
	import vertexShader from '../shaders/vertex.vert'


	//@ts-ignore
	import fragmentShaderTriangle from '../shaders/fragmentTriangle.frag';
 	//@ts-ignore
	import vertexShaderTriangle from '../shaders/vertexTriangle.vert'

	//@ts-ignore
	import vertexShaderCircCore from '../shaders/vertexShaderCircCore.vert'

	//@ts-ignore
	import fragmentShaderCircCore from '../shaders/fragmentShaderCircCore.frag'

	//@ts-ignore
	import vertexShaderCircSubCore from '../shaders/vertexShaderCircSubCore.vert'

	//@ts-ignore
	import fragmentShaderCircSubCore from '../shaders/fragmentShaderCircSubCore.frag'


	//@ts-ignore
	import fragmentShaderCircPoints from '../shaders/fragmentShaderCircSubCore.frag'


 


	import front from '../assets/front.png'
	import back from '../assets/back.png'
	import imgs from '../assets/img.png'
	import image from '../assets/Screenshot (198).png'
	import matcap from '../assets/download.png'
	import matcap1 from '../assets/download (2).png'


 
	import { postprocessing } from '../shaders/postproccessing'
	
	import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer'
	import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass'
	import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass'
	import {GlitchPass} from 'three/examples/jsm/postprocessing/GlitchPass'
 

 	export class WebGLScene {
		scene: any
		container: any
		width: any
		height: any
		renderer: any
		renderTarget: any
		camera: any
		controls: any
		time: number
		dracoLoader: any
		gltf: any
		isPlaying: boolean
		//@ts-ignore
		gui: GUI 
		imageAspect!: number
		material: any
		geometry: any
		plane: any
		Ico: any
		composer: any
		customPass: any
		mouse: any
		lastX: any
		lastY: any
		speed: any
		deltaY: any
		speedScroll: any
		position:any
		rounded: any
		diff:any
		positionScroll: any
		materialTriangle: any
		triangle: any
		materialCircCore:any
		materialCircSubCore: any
		materialS:any
		materialCircPoints: any
		  edgeGeo: any
		  meshLines: any
		  material2: any
		  meshPoints: any
		  material3: any
		  meshSphere: any
		  geometryS: any
		  plane1: any
		  geometryPart: any
		  materialsf: any
		  finalMesh: any
		  scrollDirection:any
		constructor(options: any) {
			
			this.scene = new THREE.Scene()
			
			this.container = options.dom
			// this.dom = document.getElementById('main')
			
			this.width = this.container.offsetWidth
			this.height = this.container.offsetHeight
			this.mouse = 0
			
			this.positionScroll = 0
			this.speedScroll = 0
			this.rounded = 0
			this.scrollDirection = 'down'
			
			this.geometryPart = new THREE.Group()

			// // for renderer { antialias: true }
			this.renderer = new THREE.WebGLRenderer({ antialias: true })
			this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
			this.renderTarget = new THREE.WebGLRenderTarget(this.width, this.height)
			this.renderer.setSize(this.width ,this.height )
			this.renderer.setClearColor(0x1111111, 1)
			this.renderer.useLegacyLights = true
			this.renderer.outputEncoding = THREE.sRGBEncoding
	

			
			this.renderer.setSize( window.innerWidth, window.innerHeight )

			this.container.appendChild(this.renderer.domElement)
	


			this.camera = new THREE.PerspectiveCamera( 70,
				this.width / this.height,
				0.01,
				10
			)
	
			this.camera.position.set(0, 0, 2) 
			this.controls = new OrbitControls(this.camera, this.renderer.domElement)
			this.time = 0


			this.dracoLoader = new DRACOLoader()
			this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
			this.gltf = new GLTFLoader()
			this.gltf.setDRACOLoader(this.dracoLoader)

			this.isPlaying = true

			this.addPostProccesing()
			this.mouseEvent()
			this.addObjects()		 
			this.resize()
			this.render()
			this.setupResize()
			this.lineAdd()
			this.addLights()
		}
		mouseEvent() {
			this.lastX = 0
			this.lastY = 0
			this.speed = 0
			document.addEventListener('mousemove', e => {
				this.speed = (e.pageX - this.lastX) *.1
				this.lastX = e.pageX
			})

			document.addEventListener('wheel', e => {
		 
				this.deltaY =  e.deltaY / 100
				this.speedScroll += e.deltaY * 0.0003

			})
			document.addEventListener('scroll', e => {
				const scrollY = window.scrollY / 690
				
				if(scrollY > (900 / 700) || scrollY > (700 / 700) && this.width <= 700) {
					this.finalMesh.position.x = -10
				} else {
					this.finalMesh.position.x = 0
				}

				if(scrollY >= 2.) {
					if(scrollY >= 3.2) {
						
						this.Ico.scale.set(1.8 , 1.8 , 1.8 )

						return
					} 
					this.geometryPart.scale.set(scrollY / 2 - .8 , scrollY / 2 - .8, scrollY / 2 - .8)

				}
				 

				if(scrollY > (1200 / 700)) {
					// this.scene.delete(this.finalMesh)
					// this.triangle.scale.set((1200 / 700) - scrollY / 4 , (1200 / 700) - scrollY / 4 , (1200 / 700) - scrollY / 4 )
				 
				} else {
				 
					// this.Ico.position.y = scrollY / 1000

					
					if(this.width <= 490) {
						this.finalMesh.scale.set(-scrollY / 2 + .65,-scrollY / 2 + .65, -scrollY / 2 + .65)
						this.Ico.scale.set(scrollY * 1.4 + .45, scrollY * 1.4 + .45, scrollY * 1.4 + .45)
						this.triangle.scale.set(scrollY / 6 , scrollY / 6 , scrollY / 6 )
						this.triangle.position.x =  scrollY / 3

						return 
					} 




					if(this.width <= 700) {
						this.finalMesh.scale.set(-scrollY / 2 + .8,-scrollY / 2 + .8, -scrollY / 2 + .8)
						this.Ico.scale.set(scrollY * 1.4 + .5, scrollY * 1.4 + .5, scrollY * 1.4 + .5)
						this.triangle.scale.set(scrollY / 6 , scrollY / 6 , scrollY / 6 )
						this.triangle.position.x =  scrollY / 3

						return 
					} 

					this.triangle.position.x =  scrollY / 1.8
					this.finalMesh.scale.set(-scrollY / 2 + .95,-scrollY / 2 + .95, -scrollY / 2 + .95)
					this.Ico.scale.set(scrollY + .7, scrollY + .7, scrollY + .7)
					this.triangle.scale.set(scrollY / 4 , scrollY / 4 , scrollY / 4 )
					

				}
			 

 
			})
		}
		addPostProccesing() {
			this.composer = new EffectComposer(this.renderer)
			this.composer.addPass(new RenderPass(this.scene, this.camera))
			this.customPass = new ShaderPass(postprocessing)
			this.customPass.uniforms['resolution'].value = new THREE.Vector2(this.width, this.height)
			this.customPass.uniforms['resolution'].value.multiplyScalar(window.devicePixelRatio)
			this.composer.addPass(this.customPass)
		}
		settings() {
			let that = this
		 
			this.settings = {
					//@ts-ignore
				progress: 0
			}
			//@ts-ignore
			this.gui = new GUI()
			this.gui.add(this.settings, 'progress', 0, 1, 0.01)
		}

	setupResize() {
		window.addEventListener('resize', this.resize.bind(this))
	}

	resize() {
		this.width = this.container.offsetWidth
		this.height = this.container.offsetHeight
		this.renderer.setSize(this.width, this.height)
		this.camera.aspect = this.width / this.height


		this.imageAspect = 853/1280
		let a1, a2
		if(this.height / this.width > this.imageAspect) {
			a1 = (this.width / this.height) * this.imageAspect
			a2 = 1
		} else {
			a1 = 1
			a2 = (this.height / this.width) / this.imageAspect
		} 


		this.material.uniforms.resolution.value.x = this.width
		this.material.uniforms.resolution.value.y = this.height
		this.material.uniforms.resolution.value.z = a1
		this.material.uniforms.resolution.value.w = a2


		this.materialTriangle.uniforms.resolution.value.x = this.width
		this.materialTriangle.uniforms.resolution.value.y = this.height
		this.materialTriangle.uniforms.resolution.value.z = a1
		this.materialTriangle.uniforms.resolution.value.w = a2


		this.camera.updateProjectionMatrix()



	}


	addObjects() {
		let that = this
		let texture = new THREE.TextureLoader().load(image)

		texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping


		this.material = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				landscape: {value: texture},
				mouse: {value: 0},
				resolution: {value: new THREE.Vector4()}
			},
			vertexShader,
			fragmentShader
		})
		
		this.geometry = new THREE.IcosahedronGeometry(1,1)

		this.Ico = new THREE.Mesh(this.geometry, this.material)


	 
		const geometry = new THREE.CircleGeometry(2,2)

		this.materialTriangle = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				uMouse: {value: new THREE.Vector2(0,0)},
				matcap: {value: new THREE.TextureLoader().load(matcap)},
				matcap1: {value: new THREE.TextureLoader().load(matcap1)},
				progress: {value: 0},
				resolution: {value: new THREE.Vector4()}
			},
			vertexShader: vertexShaderTriangle,
			fragmentShader: fragmentShaderTriangle
		})

		this.triangle = new THREE.Mesh(geometry, this.materialTriangle)
 



		this.materialCircCore =  new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				playhead: {value: 0},
				resolution: {value: new THREE.Vector4()}
			},
			vertexShader: vertexShaderCircCore,
			fragmentShader: fragmentShaderCircCore,
	 
		})
		this.materialCircSubCore = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				playhead: {value: 0},
				resolution: {value: new THREE.Vector4()}
			},
			vertexShader: vertexShaderCircSubCore,
			fragmentShader: fragmentShaderCircSubCore,
			// wireframe: true
		})
 
		this.materialCircPoints = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				playhead: {value: 0},
				resolution: {value: new THREE.Vector4()}
			},
			vertexShader: vertexShaderCircCore,
			fragmentShader: fragmentShaderCircPoints,
			// wireframe: true
		})

		this.geometryS = new THREE.IcosahedronGeometry(1,3)
		this.edgeGeo = new THREE.EdgesGeometry(this.geometryS)
		this.plane1 = new THREE.Mesh(this.geometryS, this.materialCircCore)
		this.meshLines = new THREE.LineSegments(this.edgeGeo, this.materialCircSubCore)
		this.meshPoints = new THREE.Points(this.geometryS, this.materialCircPoints)
		this.meshSphere = new THREE.Mesh(this.geometryS,
			 new THREE.MeshMatcapMaterial({
				matcap: new THREE.TextureLoader().load(imgs),
			opacity: 0.8,
			transparent: true
		}))
		this.meshLines.scale.set(1.001, 1.001,1.001)
		this.meshPoints.scale.set(1.005, 1.005,1.005)



		this.geometryPart.add(this.plane1, this.meshLines, this.meshPoints, this.meshSphere)
 
		
		this.geometryPart.scale.set(0,0,0)


		this.scene.add(this.geometryPart)


		this.triangle.scale.set( .1, .1, .1)
		this.scene.add(this.triangle)

		this.Ico.scale.set(.7, .7, .7)
		
		if(this.width <= 700) this.Ico.scale.set(.5, .5, .5) 
		if(this.width <= 490) this.Ico.scale.set(.45, .45, .45) 


		this.scene.add(this.Ico)
 
	}
	lineAdd() {
		let frontTexture = new THREE.TextureLoader().load(front)
		let backTexture = new THREE.TextureLoader().load(back)

		let arr = [frontTexture, backTexture]

		// console.log(frontTexture, backTexture);

		arr.forEach(t => {
			t.wrapS = 1000,
			t.wrapT = 1000,
			t.repeat.set(1,1)
			t.offset.setX(0.5)
			t.flipY = false
		})

		//frontTexture.repeat.set(-1, 1)
 
		backTexture.repeat.set(-1, 1)
		

		let frontMaterial = new THREE.MeshStandardMaterial({
			map: frontTexture,
			side: THREE.BackSide,
			roughness: 0.65,
			metalness: 0.25,
			alphaTest: true
		})

		let backMaterial = new THREE.MeshStandardMaterial({
			map: backTexture,
			side: THREE.FrontSide,
			roughness: 0.65,
			metalness: 0.25,
			alphaTest: true
		})
		let num = 7

		let curvePoints = []

		for (let i = 0; i < num; i++) {

			let thelta = i / num * Math.PI * 2

			curvePoints.push(
				new THREE.Vector3().setFromSphericalCoords(1, Math.PI / 2 + (Math.random() - 0.5) , thelta)
			)

		}

		const curve = new THREE.CatmullRomCurve3(curvePoints)

		curve.tension = .7

		curve.closed = true

		const points = curve.getPoints(50)

		const geometry = new THREE.BufferGeometry().setFromPoints(points)
		const material = new THREE.LineBasicMaterial({color: 0xff0000})
		const curveObject = new THREE.Line(geometry, material)

		// this.scene.add(curveObject)

		let number = 1000
 
		let frenetFrames = curve.computeFrenetFrames(number, true)
		let spacedPoints = curve.getSpacedPoints(number)
		let tempPlane = new THREE.PlaneGeometry(1,1,number, 1)
		let dimensions = [-.1, 0.1]


		this.materialsf = [frontMaterial, backMaterial]

		tempPlane.addGroup(0,6000,0)
		tempPlane.addGroup(0,6000,1)



		let point = new THREE.Vector3()
		let binormalShift = new THREE.Vector3()
		let temp2 = new THREE.Vector3()

		let finalPoints: any = []

		dimensions.forEach(d => {
			for (let i = 0; i <= number; i++) {
				point = spacedPoints[i]
				binormalShift.add(frenetFrames.binormals[i]).multiplyScalar(d)
				
				finalPoints.push(new THREE.Vector3().copy(point).add(binormalShift))
			}
		})


		this.finalMesh = new THREE.Mesh(tempPlane,this.materialsf)



		finalPoints[0].copy(finalPoints[number])
		finalPoints[number + 1].copy(finalPoints[2 * number + 1])


		// finalPoints[number + 1].copy()


		tempPlane.setFromPoints(finalPoints)

		if(this.width <= 700) this.finalMesh.scale.set(.8, .8, .8) 
		if(this.width <= 490) this.finalMesh.scale.set(.65, .65, .65) 


		this.scene.add(this.finalMesh)
	}



	addLights() {
		const light1 = new THREE.AmbientLight(0xeeeeee, 0.5)
		this.scene.add(light1)
	
	
		const light2 = new THREE.DirectionalLight(0xeeeeee, 0.5)
		light2.position.set(.2,.5,-1)

		const light3 = new THREE.DirectionalLight(0xeeeeee, 0.5)
		light3.position.set(0,0,.4)
		this.scene.add(light2)
		this.scene.add(light3)
		
	}

	stop() {
		this.isPlaying = false
	}

	play() {
		if(!this.isPlaying) {
			this.isPlaying = true
			this.render()
		}
	}


	scaleObject() {
	 
		this.Ico.position.y = -.1 + Math.sin(Date.now() * 0.0009 ) * 0.07
 
		 
		this.triangle.rotation.x = -.1 + Math.sin(Date.now() * 0.0009 ) * 0.07


		// this.Ico.material.uniforms.
	 
		// this.customPass.uniforms.howmuch.value = 2

		if(this.positionScroll >= 2.2  ) {
			if(this.positionScroll >= 5) return

			// this.geometryPart.scale.set(this.positionScroll / 2 - 1.1,this.positionScroll / 2 - 1.1, this.positionScroll / 2 - 1.1)
			
			// this.geometryPart.position.x = -.1 + Math.sin(Date.now() * 0.0009 ) * 0.07 - this.positionScroll / 3
			
			// this.triangle.position.x = this.positionScroll - 1.1
			// this.triangle.scale.set(-this.positionScroll / 5 , -this.positionScroll / 5, -this.positionScroll  / 5)
		} else {
			// if(this.finalMesh)  
			// this.triangle.scale.set(this.positionScroll / 5 + .1, this.positionScroll / 5 + .1, this.positionScroll / 5 + .1)
			// this.Ico.scale.set(this.positionScroll + .7, this.positionScroll + .7, this.positionScroll + .7)
			// this.triangle.position.x = -.1 + Math.sin(Date.now() * 0.0009 ) * 0.07 + this.positionScroll / 1.8
		}
		if(this.positionScroll >= 4.  ) {
			if(this.positionScroll >= 5) return
			this.geometryPart.scale.set(-this.positionScroll / 2 + 2.9, -this.positionScroll / 2 + 2.9, -this.positionScroll / 2 + 2.9)
			this.Ico.scale.set(-this.positionScroll + 6.8, -this.positionScroll + 6.8, -this.positionScroll + 6.8)
			// console.log(this.positionScroll)
		}
		
	 
		 
	}

	render() {
			if(!this.isPlaying) return
			this.mouse -= (this.mouse - this.speed) * 0.05
			this.mouse *= 0.99
			this.time += 0.05

			this.positionScroll += this.speedScroll
			this.speedScroll *= 0.8
			this.rounded = Math.round(this.positionScroll)

			this.diff = (this.rounded - this.positionScroll)

			this.scaleObject()


			// this.materialCircCore.uniforms.time.value = this.time
			this.materialCircSubCore.uniforms.playhead.value = this.time / 10
			this.materialCircPoints.uniforms.playhead.value = this.time / 10

			this.materialCircCore.uniforms.playhead.value = this.time / 10

	 


			this.Ico.rotation.y = this.time / 20
			this.material.uniforms.time.value = this.time
			this.customPass.uniforms.time.value = this.time
			this.materialTriangle.uniforms.time.value = this.time
 

			this.customPass.uniforms.howmuch.value = this.mouse + .5 + this.positionScroll / 20
			this.material.uniforms.mouse.value = this.mouse 
			this.materialTriangle.uniforms.uMouse.value = new THREE.Vector2(this.mouse / 3, this.lastY)
			//this.renderer.setRenderTarget(this.renderTarget)
			// this.renderer.render(this.scene, this.camera)
			this.positionScroll += Math.sign(this.diff) * Math.pow(Math.abs(this.diff), 0.9) * 0.035



			if(this.materialsf) {
				this.materialsf.forEach((m: any, i:number) => {
					m.map.offset.setX(this.time / 20)
		
					if(i > 0) {
						m.map.offset.setX(-this.time / 20)
					
					}
				})
			}
		 



			this.composer.render()
			// this.renderer.render(this.scene, this.camera)

			//this.renderer.setRenderTarget(null)
	
			requestAnimationFrame(this.render.bind(this))
		}
 
	}
 
 