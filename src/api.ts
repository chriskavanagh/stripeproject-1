import axios from 'axios';

const pub = "pk_test_51HQL9qJKk6ycpnEktGDhEAOi7cPtU1kb6q072jQFcNaP7aq2cHun78vsKw2RvfIIZLJDmR3D3G3j7pur6Wd2qH28003s3kmWyP"
const token = "sk_test_51HQL9qJKk6ycpnEkPW5WOaO4G02eKdfzCz5tHXLsxllooaSXJE2auCT1Za5UQ13IS8QGgmqR8Et71mxXasUNqKJ500RMeajDaW"


axios.defaults.baseURL = 'https://api.stripe.com';
axios.defaults.headers.common[ 'Authorization' ] = `Bearer ${ token }`;


