<template>
	<section class="container">
	
		<h2 class="mt-3">Home</h2>
		<!--Products List-->
		<section class="row">
			<div class="col-4" v-for="p in products"><!--col-->
				<article class="product h-100 bg-white border shadow-lg"><!--Product-->
					<div class="product-image">
						<img :src="p.image" class="img-fluid">
					</div>
					<section class="product-content p-3"><!--Content-->
						<div class="details"><!--Product Details-->
							<div><strong>Name </strong>{{ p.name }}</div>
							<div><strong>Price </strong>{{ p.price | dollar }}</div>
						</div>
						<div class="actions"><!--Actions-->
							<button class="btn btn-primary" @click="addToCart(p)">
								Add To Cart
							</button>
					
						</div><!--Content-->
					</section>
				
				</article><!--Product-->
			</div><!--col-->
		</section><!--Row-->
		<!--Checkout Button-->
		<router-link class="btn btn-success my-5" to="/cart">View Cart</router-link>
		<!--Checkout Button-->
		<!--Alert-->
		<div class="alert alert-success mt-3" v-if="paymentSucceeded">
			Payment Succeed
		</div>
	</section>
</template>

<script type="text/tsx">
	const products = [
		{
			id: '1',
			image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-1.jpg',
			name: 'Nintendo Switch',
			price: 300
		},

		{
			id: '2',
			image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-5.jpg',
			name: 'Game Cube',
			price: 100
		},
		{
			id: '3',
			image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-6.jpg',
			name: 'Gameboy Color',
			price: 45
		}
	]
	export default {
		name: "Home",
		data() {
			return {
				products,

			}
		},
		computed: {
			cart() {
				return this.$store.state.cart
			},
			paymentSucceeded() {
				return this.$route.query.payment == 'true';
			},

		},
		methods: {
			addToCart( product ) {
				let cartitem = this.cart.find( citem => citem.id == product.id );
				// If Item Is In Cart
				if ( cartitem ) {
					cartitem.qty += 1;
				} else {
					// Create Cart Item With Qty 1
					cartitem = { ...product, qty: 1 }
					this.$store.state.cart = [ ...this.cart, cartitem ]
				}
			}
		}
	}
</script>
