import React, { useState } from 'react';
import Shopping from './Shopping';

export default function Login({user}) {  

    const [click, setClick] = useState(false);
    if(click) {
        return (
        <Shopping user = {user} />
        )
    }

  return (
    <div>
        <h1>Login Component</h1>
        <h3>
            UserName: {user.username}, <br></br>
            Wallet Balance: {user.balance}
        </h3>
        <button onClick={()=>{setClick(true)}}>Shopping</button>
    </div>
  )
}
