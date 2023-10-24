<style scoped>
	.container {
		max-width: 1400px;
		padding: 0 50px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		/* align-items: end; */
	}
	img {
		width: 400px;
		height: 100% !important;
		border-radius: 20px;
		-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
		filter: grayscale(100%);
		transition: .3s ease all;
	}
	img:hover {
		-webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
		filter: grayscale(0%);
	}
	img:last-child {
		margin-top: 200px;
	}
	@media screen and (max-width: 1000px) {
		img {
			 width: 100%;
		}
		.container {
			flex-direction: column;
			/* justify-content: start; */
			align-items: center;
		}
		img:last-child {
			margin-top:50px;
		}
	}
</style>


<template> 
	<section class="container">

		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBLORxmuwMNWRDP-AHNGnLl9fO-vaHpr1iA&usqp=CAU" alt="photoL">

		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBLORxmuwMNWRDP-AHNGnLl9fO-vaHpr1iA&usqp=CAU" alt="photoL">

	</section>

</template>


<script>


</script>