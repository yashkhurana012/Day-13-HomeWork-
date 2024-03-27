import { useState } from "react";
import { createContext , useContext } from "react";

export let CartContext = createContext();

export let UseCart = ()=>{
     return useContext(CartContext)
}

export let CartProvider = (props)=>{
   
    let [item , setItem] = useState([{
        'ProductName':'Product-1',
        'Price':100,
        'quantity':0
    },
    {
        'ProductName':'Product-2',
        'Price':200,
        'quantity':0
    },
    {
        'ProductName':'Product-3',
        'Price':300,
        'quantity':0
    }]);
    
    return(
        <CartContext.Provider value={{item,setItem}}>
            {props.children}
        </CartContext.Provider>
        

    )
}