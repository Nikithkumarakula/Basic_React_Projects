import React, { useState } from 'react';
import Cart from './Cart';

export default function Shopping({user}) {  

    const [click, setClick] = useState(false);
    if(click) {
        return (
        <Cart user = {user} />
        )
    }

  return (
    <div>
        <h1>Shopping Component</h1>
        <h5> What your you want shopping here and add your cart</h5>
        
        <button onClick={()=>{setClick(true)}}>Cart</button>
    </div>
  )
}
