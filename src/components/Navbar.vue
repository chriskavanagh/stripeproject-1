<template>
	<header class="p-2 bg-white px-4 d-flex justify-content-between align-items-center border border-primary shadow-lg">
		<div class="header-logo">
			<h2><i class="fas fa-home"></i> Stripe App</h2>
		</div>
		<nav class="nav">
			<router-link class="nav-item nav-link" to="/">Home</router-link>
			<router-link class="nav-item nav-link" to="/cart">
				<span class="cart badge badge-warning">{{ count }}</span>
				Cart
			</router-link>
			<router-link class="nav-item nav-link" to="/checkout">Checkout</router-link>
		
		</nav>
	</header>
</template>

<script type="text/tsx">
	export default {
		name: "Navbar",
		computed: {
			count() {
				return this.$store.state.cart.length;
			}
		}
	}
</script>
<style>
	.cart{
		position: relative;
		top: -2px;
	}
</style>