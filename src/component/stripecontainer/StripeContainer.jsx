import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from '../paymentform/PaymentForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const PUBLIC_KEY = "pk_test_51LbnZyC5w0QB8t1yKxhJoCEdTbUvmCPig5P35Xp3KkaeVrN85EtqPE00ll1P5nv5pcnivbGxXts9HpOSjegoGSZI00JJ998q2q"

const stripePromise = loadStripe(PUBLIC_KEY);



export default function StripeContainer() {
  return (
    <Elements stripe={stripePromise}>
        <PaymentForm />
    </Elements>
  )
}
