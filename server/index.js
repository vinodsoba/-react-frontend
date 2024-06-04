const express = require("express");
const app = express();

const { resolve } = require("path");

const env = require("dotenv").config({ path: "./.env" });
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST, {
    apiVersion: "2022-08-01",
});


const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())


app.use(express.static(process.env.STATIC_DIR));

app.get("/", cors(), (req, res) => {
    const path = resolve(process.env.STATIC_DIR + "/index.html");
    res.sendFile(path);
  });

app.get("/config", (req, res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
});

app.post("/create-payment-intent", async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: 'gbp',
            amount: 25350,
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.send({ clientSecret: paymentIntent.client_secret });

    } catch(e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
    
    
});

app.listen(5252, () => {
    console.log("Server is listening on port http://localhost:5252")
});

