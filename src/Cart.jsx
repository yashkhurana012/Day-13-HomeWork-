import React, { useEffect, useState } from 'react'
import { UseCart } from './Context/Context'

function Cart() {
    let {item , setItem} = UseCart();
    let [total , setTotal] = useState(0)

    useEffect(()=>{
        let a = item.reduce((acc,elem)=>{
            return acc+=elem.quantity*elem.Price;

        },0)
        setTotal(a)


    },[item])
    console.log(item);
  return (
    <div className='box'>
    <h2>Cart</h2>
    
      { item.map((e,key)=>(
        e.quantity>0?
        <div style={{display:'flex',gap:'10px',paddingTop:'1rem'}}>
           <p key={key}>{e.ProductName}</p>
           <p key={key}>{e.quantity} * {e.Price}</p>
        </div>:<></>
      ))

    }
    <h2 style={{paddingTop:'1rem'}}>Total : {total}</h2>
    
       
    </div>
  )
}

export default Cart