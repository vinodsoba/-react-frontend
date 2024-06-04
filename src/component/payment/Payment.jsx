import React, { useEffect, useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../checkoutform/CheckoutForm";


function Payment() {
    const [stripePromise, setStripePromise ] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("http://localhost:5252/config").then(async (r) => {
          const { publishableKey } = await r.json();
          setStripePromise(loadStripe(publishableKey));
         
        });
      }, []);

    useEffect(() => {
       fetch("http://localhost:5252/create-payment-intent", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify({}),
        }
       }).then(async (r) => {
        const { clientSecret } = await r.json();
        setClientSecret(clientSecret);
       }).catch(err => console.log(err))
    }, []);

    return (  
        <div style={{ 'display' : 'flex', 'justify-content':'center'}}>
            
            <div style={{ 'width': "400px"}}>
            <h1>Payment Form </h1>
                {stripePromise && clientSecret && (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div>
        </div>
    );
}

export default Payment;