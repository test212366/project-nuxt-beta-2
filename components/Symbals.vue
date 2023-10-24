<style scoped>
	.symbOne {
		height: 600px;
		width: 200px;
		background-color: rgba(255, 255, 255, 0.041);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		transform: rotate(-20deg);
		border-radius: 60px;
	}
	.symbals {
 
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		/* left: 100px; */
		right: -100%;
		top: 20px;
		bottom: 0;
		animation-name: animation;
		animation-delay: 2s;
		/* animation-composition: ; */
		animation-duration: 3s ;
	}
	.secondSymb {
		margin-left: 10px;
	}
	.mr {
		display: flex;
		justify-content: center;
		align-items: center;

	}
	.mr > div {
		/* transform: translateX(80deg); */
		transform: rotate(20deg);

	}
	@keyframes animation {
		0% {
			top: -100%;
			left: 0;
			right: -100%;
		}
		100% {
			top: 140%;

			right: 0;
			left: -140%;
		}
	}
	 
</style>

<template>
	<div class="test">
		<p>123</p>
		<section class="symbals">
			<div class="symbOne"></div>
			<div class="symbOne secondSymb"></div>
			<div class="mr">
				<div class="symbOne"></div>
				<div class="symbOne secondSymb"></div>
			</div>
	 
		</section>
	</div>
 

</template>


<script>


</script>