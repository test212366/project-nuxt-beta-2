<script setup lang="ts">


</script>

<template> 
	<main>
		<WebGL />
		<Welcome />
		<Description />
		<Description />
		<ImagesSection />
		<Description />
 
		<Footer />
	 
			<!-- <Symbals /> -->
  
		

	</main>
	
</template>


<style  >

	
	@font-face {
		font-weight: 400;
		font-family: Orbitron;
		src: url("../assets/Orbitron-Regular.ttf");
	}
	@font-face {
		font-weight: 500;
		font-family: Orbitron;
		src: url("../assets/Orbitron-Medium.ttf");
	}
	@font-face {
		font-weight: 600;
		font-family: Orbitron;
		src: url("../assets/Orbitron-SemiBold.ttf");
	}
	@font-face {
		font-weight: 800;
		font-family: Orbitron;
		src: url("../assets/Orbitron-Bold.ttf");
	}
	@font-face {
		font-weight: 900;
		font-family: Orbitron;
		src: url("../assets/Orbitron-Black.ttf");
	}
	body {
		overscroll-behavior: none;
		background-color: black;
	}
	body::-webkit-scrollbar {
		width: 6px;               /* width of the entire scrollbar */
		/* position: absolute;
		right: 10px; */
	}

	body::-webkit-scrollbar-track {
		background: #000000;        /* color of the tracking area */
	}

	body::-webkit-scrollbar-thumb {
		background-color: rgb(34, 34, 34);    /* color of the scroll thumb */
		border-radius: 20px;       /* roundness of the scroll thumb */
		 
	}
	* {
		color: #fff;
		font-family: Orbitron;
		-ms-user-select: none; 
		-moz-user-select: none; 
		-webkit-user-select: none; 
		user-select: none; 
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	 
	canvas {
		display: block;
	}
 

</style>