<style scoped>
	.welcome__title {
 
		font-size: 110px;
		letter-spacing: 11px;
		font-weight: 900;
 
	}
	.welcome__section {
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.welcome__section p{
		color: #757575;
		/* letter-spacing: 2px; */
	}
	.welcome__section-title-one {
		margin-top: 40px;
	}
	.welcome__section-title-one p{
		letter-spacing: 3px;
		text-align: center;
		font-size: 14px;
	}
	.welcome__section-title-one p:last-child {
		font-size: 10px;
		margin-top: 5px;
	}
	.welcome__section-title-last {
		max-width: 400px;
		margin-bottom: 30px;
	}
	.welcome__section-title-last p {
		text-align: center;
		font-size: 14px;
	}
	.welcome__section-title-last p:first-child {
		margin-bottom: 10px;
		color: #b1b1b1;
	}
	.welcome__section-title-last p:last-child {
		font-size: 11px;
	}
	.welcome__words {
		position: fixed;
		left: -240px;
		top: 50%;
		transform: rotate(-90deg) translateY(-50%);
		font-size: 12px;
		color: #737373;
 
		overflow: hidden;
	}
	.welcome__words p {
		width: 100%;
	
	}

	@media screen and (max-width: 1000px) {
		.welcome__section-title-last p:first-child {
			font-size: 12px;
		}
		.welcome__section-title-last p:last-child {
			font-size: 11px;
		}
		.welcome__title {
			font-size: 85px;
		}
		.welcome__words {
			left: -200px;

		}
		.welcome__words p {
			font-size: 10px ;
	
		}
		.welcome__section-title-one p:first-child {
			font-size: 11px;
		}
		.welcome__section-title-one p:last-child {
			font-size: 9px;
		}
	}
	@media screen and (max-width: 650px) {
		.welcome__title {
			font-size: 70px;
		}
		.welcome__section-title-last p:first-child {
			font-size: 10px;
		}
		.welcome__section-title-last p:last-child {
			font-size: 9px;
		}
		.welcome__words {
			left: -180px;

		}
		.welcome__words p {
			font-size: 9px ;
	
		}
		.welcome__section-title-one p:first-child {
			font-size: 10px;
		}
		.welcome__section-title-one p:last-child {
			font-size: 8px;
		}
	 
	}
	@media screen and (max-width: 500px) {
		.welcome__title {
			font-size: 55px;
		}
		.welcome__section-title-last p:last-child {
			max-width: 330px;
		}
	}
	@media screen and (max-width: 414px) {
		.welcome__title {
			font-size: 45px;

		}
		.welcome__section-title-last p:last-child {
			max-width: 300px;
		}
	}
	@media screen and (max-width: 360px) {
		.welcome__title {
			font-size: 35px;

		}
	}

</style>
<template> 
	<section class="welcome__section">
		<div class="welcome__words">
	
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, nostrum? Aut similique </p>
			
		</div>
		<div class="welcome__section-title-one">
			<p>MOONBANDIT</p>
			<p>PRESENTS</p>
		</div>
		<div>
			<h1 class="welcome__title">VUASPID</h1>
	
		</div>
		<div class="welcome__section-title-last">
			<p>DISPLAY FONT</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.perferendis a facilis magni laborum. Illo molestias ab natus similique quidem, iure dicta voluptatem nemo.</p>
		</div>	
	</section>

</template>	

<script>	


</script>