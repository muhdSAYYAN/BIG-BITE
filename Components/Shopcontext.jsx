import { View, Text } from 'react-native'
import React,{useState,createContext} from 'react'
import gana from './Gana';


export const shopcart = createContext(null);

const getdeafaultcart =()=>{
    let cart ={};
    for(let i=1;i<gana.length+1;i++){
        cart[i]=0;
    }
    return cart;
}


const Shopcontext = (props) => {

    const [cartItems,setCartItems] = useState(getdeafaultcart())
    const getTotalAmount =()=>{
        let totalAmount = 0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let iteminfo = gana.find((product)=>product.id===Number(item));
            totalAmount += cartItems[item] * iteminfo.price
        }
    }
    return totalAmount;

}
 const addTocart =(itemid)=>{
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
 }

 const removeFromcart =(itemid)=>{
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid] -1}))
 }

 const addQuantity =(newAmount,itemid)=>{
    setCartItems((prev)=>({...prev,[itemid]:newAmount}))
 }
 
 const deleteItem =(itemid)=>{
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid] - prev[itemid]}))
 }

 const contextValues = {cartItems,addTocart,removeFromcart,deleteItem,getTotalAmount}

  return (
   <shopcart.Provider value={contextValues}>{props.children}</shopcart.Provider>
  )
}

export default Shopcontext