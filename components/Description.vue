<style scoped>
	.description {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.description__title-wrap h1 {
		margin-bottom: 10px;
		letter-spacing: 2px;
		
	}
	.description__title-wrap p {
		font-size: 12.5px;
		line-height: 20px;
		max-width: 700px;
		color: #837f7f;
	}
 
	.container {
		position: relative;
		height: 100vh;
	 
		display: flex;
		align-items: center;
 
		max-width: 1400px;
		margin: 0 auto;
		padding: 50px;
	}
 
	.description__sub {
		position: absolute;
		right: 40px;
		bottom: 160px;
		font-size: 11.5px;
		max-width: 500px;
		color: #837f7f;
		line-height: 20px;
		text-align: center;

	}
	@media screen and (max-width: 1000px) {
		.description__title-wrap h1{
			font-size: 19px;
		}
		.description__title-wrap p {
			font-size: 11px;
			max-width: 500px;
		}
		.description__sub {
			max-width: 400px;
		}
	}
	@media screen and (max-width: 650px) {
		.container {
			padding: 25px;
		}
		.description__sub {
			right: 25px;
		 }
		.description__title-wrap h1 {
			font-size: 15px;
		}
		.description__title-wrap p {
			font-size: 9px;
		}
		.description__sub {
			font-size: 9px;
		}
	}
	@media screen and (max-width: 500px) {
		.description__sub {
			/* width: 100%; */
			left: 25px;
			right: 25px ;
			max-width: unset;

			bottom: 20px;
			text-align: end;
		}
	}
	 
</style>

<template>
	<section class="container">
		<div class="description__title-wrap">	

			<h1>Description Something</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium suscipit porro amet labore totam adipisci, natus inventore nostrum perferendis esse atque ullam expedita laudantium exercitationem iure minus maiores voluptatem.
			</p>

		</div>
		
		<p class="description__sub">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia minus quo accusamus pariatur eveniet quae incidunt blanditiis, nihil rem facere molestias recusandae ducimus! Fugiat, quo rerum? Tenetur aliquam necessitatibus neque.</p>
		
	</section>


</template>

<script>


</script>