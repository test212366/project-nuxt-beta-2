<style scoped>
	.footer__container {
		display: flex;
		justify-content: space-between;
		max-width: 1400px;
		margin: 0 auto;
		padding: 50px;
		font-size: 11px;
		letter-spacing: 1.5px;
 
	}
	.footer__container p {
		color: #949494;
	}
	@media screen and (max-width: 1000px) {
		.footer__container {
			padding: 40px;
		}
	}
	@media screen and (max-width: 1000px) {
		.footer__container {
			padding: 25px;
		}
		.footer__container p {
			font-size: 9px;
		}
	}
</style>


<template> 
	<footer>	
		<div class="footer__container">
			<div>
				<p>vuaspid@gmali.com</p>
			</div>
			<p>2023 @ VUASPID</p>
		</div>
	</footer>

</template>


<script>	


</script>