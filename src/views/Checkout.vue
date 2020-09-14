<template>
	<section class="container">
		<h2 class="my-4">Checkout Form</h2>
		<section class="payment-form bg-white shadow-sm w-50 mx-auto border p-4">
			<h3 class="mb-0">Payment Details</h3>
			<p class="mt-0 text-muted font-size-sm">Payments Handled by Stripe</p>
			<p class="">
				<strong>Amount:</strong> {{ $store.getters.amount | dollar }}
			</p>
			<div id="card-element"></div>
			
			<button class="btn btn-primary my-4" @click="handleCard">
				Checkout
			</button>
			
		</section>
		
	</section>
</template>

<script type="text/tsx">
	import { createPaymentIntent } from "../../api";
	import { db } from "../db";

	var stripe = Stripe( 'pk_test_51HQL9qJKk6ycpnEktGDhEAOi7cPtU1kb6q072jQFcNaP7aq2cHun78vsKw2RvfIIZLJDmR3D3G3j7pur6Wd2qH28003s3kmWyP' );

	export default {
		name: "Checkout",
		data() {
			return {
				card: null,
		
				status: 'pending',
				paymentConfirmed: false
			}
		},
		filters: {
		
		},
		methods: {
			// Create Card Form
			createCardForm() {
				const elements = stripe.elements();
				const card = elements.create( "card", );
				card.mount( "#card-element" );
				this.card = card;
			},
			// Handle Card Details
			async handleCard() {
				this.status = 'handlingcard'
				const results = await stripe.confirmCardPayment( this.$store.state.secret, {
					payment_method: { card: this.card }
				} );
				this.status = 'cardconfirmed';
				this.paymentConfirmed = true;
				// Add Order
				await db.collection( 'orders' ).add( {
					amount: this.$store.getters.amount,
					created: Date.now()
				} );
				// Reset Cart
				this.$store.state.cart = [];
				this.$store.state.secret = ''
				this.$router.push( '/?payment=true' )
			}
		},
		mounted() {
			this.createCardForm()
		}
	}
</script>
<style>
	.CardField.CardField--ltr {
		font-size: 16px;
	}
</style>
