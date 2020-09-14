import Vue from 'vue';
import Router from 'vue-router'
import Home from "./views/Home";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";

Vue.use( Router );


const router = new Router( {
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/cart', component: Cart },
		{ path: '/checkout', component: Checkout },
	]
} );


export default router;
