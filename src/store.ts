import Vue from "vue";
import Vuex from "vuex";

Vue.use( Vuex );




const store = new Vuex.Store( {
	state: {
		cart: [],
		secret: '',

	},
	mutations: {
		setSecret( state, secret ) {
			state.secret = secret
		}
	},
	getters: {
		amount( state ) {
			if ( state.cart.length ) {
				return state.cart.reduce( ( prev, cur ) => {
					return prev + cur.price * cur.qty;
				}, 0 );
			} else {
				return 0;
			}
		}

	}
} );



export default store;