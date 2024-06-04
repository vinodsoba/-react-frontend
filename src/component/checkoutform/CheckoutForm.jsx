import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

function CheckoutForm() {

    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true)

        const {error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/complete`,
            },
            redirect: "if_required",
        });

        if(error) {
            setMessage(error.message);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            setMessage("Payment status:" + paymentIntent.status + "😃");
        } else {
            setMessage("failed");
        }

        setIsProcessing(false);

    }
    
    
    return (  
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={isProcessing} id="submit">
                <span id="button-text">
                    {isProcessing ? "Processing ..." : "Pay now"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
}

export default CheckoutForm;