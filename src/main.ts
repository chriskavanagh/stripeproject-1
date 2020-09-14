import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from "./store";

Vue.config.productionTip = false
Vue.filter( 'dollar', function ( amount ) {
	const formatter = new Intl.NumberFormat( 'en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	} );
	return formatter.format( amount );
} )

// @ts-ignore
new Vue( {
	// @ts-ignore
	router,
	store,
	render: h => h( App ),
} ).$mount( '#app' )
