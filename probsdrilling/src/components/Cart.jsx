import React, { useState } from 'react';
import Payment from './Payment';

export default function Cart({user}) {  

    const [click, setClick] = useState(false);
    if(click) {
        return (
        <Payment user = {user} />
        )
    }

  return (
    <div>
        <h1>Cart Component</h1>

        <h5>Your added some products in your cart, please complete your payment process <br></br> By help of clicking the payment </h5>
        
        <button onClick={()=>{setClick(true)}}>Payment</button>
    </div>
  )
}
