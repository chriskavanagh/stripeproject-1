import * as firebase from 'firebase';

var firebaseConfig = {
	apiKey: "AIzaSyCc6ggbqSUAqstH9k3xBZH3Rwzm0j6bAEs",
	authDomain: "fir-proj-5089a.firebaseapp.com",
	databaseURL: "https://fir-proj-5089a.firebaseio.com",
	projectId: "fir-proj-5089a",
	storageBucket: "fir-proj-5089a.appspot.com",
	messagingSenderId: "695975676780",
	appId: "1:695975676780:web:cebe20e2c32058443e0149"
};

if ( !firebase.apps.length ) {
	firebase.initializeApp( firebaseConfig );
}
// Initialize Firebase

export const db = firebase.firestore();


