const axios = require( "axios" );


export async function createPaymentIntent( amount = 200 ) {
	const { data } = await axios.post( "https://stripeserver123.herokuapp.com/paymentintents", { amount } );
	return data;
}


