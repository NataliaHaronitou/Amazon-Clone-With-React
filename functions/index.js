const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HQoOHDwxFpcxNbLbjhdpsvGNwQ8GHfN1PYf9mDyjbhIYVIZwRnqucOU7noOXPhP2WxEc0A7w3kj6jMs6KtOFBgV00oN6nqAhv')

//  API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved !!!!!!!!!YO!!!!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// -Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/react-clone-32c0d/us-central1/api