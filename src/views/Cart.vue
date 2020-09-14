<template>
	<section class="container">
		<h2 class="mt-3">Cart</h2>
		<!--Cart Items-->
		<div class="list-group w-50 mx-auto">
			<!--Loop-->
			<article class="list-group-item mb-4" v-for="item in cart">
				<div class="media">
					<img :src="item.image" class="">
					<div class="media-body pl-3">
						<div>
							<strong>Name</strong>
							{{ item.name }}
						</div>
						<div>
							<strong>Price</strong>
							{{ item.price }}
						</div>
						<div>
							<strong>Quantity</strong>
							{{ item.qty }}
						</div>
						<div class="cart-actions">
							<button class="btn btn-primary" @click="removeFromCart(item.id)">
								Remove From Cart
							</button>
						</div>
					</div>
				</div>
			</article>
			<!--Loop-->
		</div>
		<!--Cart Items-->
		<!--Create Payment Intent-->
		<div class="mb-5">
			<p class="badge badge-primary p-2">
				<strong>Amount Due:</strong> {{ $store.getters.amount | dollar}}
			</p>
			<br>
			<button class="btn btn-success" @click="createClientSecret">
				Proceed To Checkout
			</button>
		</div>
		<!--Payment Intent-->
	
	
	</section>
</template>

<script lang="ts">
	/*
	 * Get Total Of Cart
	 * Create Client secret attach that shit to state
	 *
	 * */
	import { createPaymentIntent } from "../../api";

	export default {
		name: "Cart",
		data() {
			return {}
		},
	
		computed: {
			cart() {
				return this.$store.state.cart;
			},
			total() {
				let total =  this.$store.state.cart.reduce( ( prev, curr ) => {
					return prev + curr.price * curr.qty
				}, 0 );
				return total * 100;
			}
		},
		methods: {
			// This Creates Payment Intent Essentailly the amount to charge the server
			async createClientSecret() {
				
				// Send Request To Server To Make Payment Intent
				const clientsecret = await createPaymentIntent( this.total )
				this.$store.commit( 'setSecret', clientsecret );
				this.$router.push( '/checkout' )
			},
			removeFromCart( id ) {
				this.$store.state.cart = this.cart.filter( item => item.id !== id );
			}
		}
	}
</script>
