import React, { useState } from 'react'
import StripeContainer from "../../component/stripecontainer/StripeContainer"

function Stripe() {
    const [showItem, setShowItem] = useState(false)
    return (  
        <>
            <h1>This is a Stripe Integration Test</h1>
            {
                showItem ? <StripeContainer /> : <><h3>$10.00</h3> <p>Image Goes Here</p><button onClick={() => setShowItem(true)}>Purchase Booking</button></>
            }
        </>
        

    );
}

export default Stripe;