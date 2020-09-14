const axios = require( "axios" );


export async function createPaymentIntent( amount = 200 ) {
	const { data } = await axios.post( "http://localhost:4000/paymentintents", { amount } );
	return data;
}


