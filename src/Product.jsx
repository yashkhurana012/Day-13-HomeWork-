import React, { useEffect, useState } from 'react'
import { UseCart } from './Context/Context'
function Product() {
    let {item , setItem} = UseCart();
    

    let plus = (index) =>{
        let updateData = [...item]
        updateData[index] = {...updateData[index] , quantity: updateData[index].quantity + 1}
        setItem(updateData)
        
    }

    let minus = (index) =>{
        if(item[index].quantity>0){
            let updateData = [...item]
        updateData[index] = {...updateData[index] , quantity: updateData[index].quantity - 1}
        setItem(updateData)
        }
       
        
    }
    
    
    
    
  return (
    <div className='box'>
    <h2>Products</h2>
        {item.map((element , index) =>{
            return(
                <div className='item-box'> 
                    <p>{element.ProductName}</p>
                    <p>{element.Price}</p>
                    <div className='button-box'>
                        <button style={{padding:'4px 10px'}} onClick={()=>minus(index)}>-</button>
                        <p>{element.quantity}</p>
                        <button style={{padding:'4px 10px'}} onClick={()=>plus(index)}>+</button>
                    </div>
                </div>
            )
        })

        }
    </div>
  )
}

export default Product