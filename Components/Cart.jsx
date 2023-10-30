import { View, Text ,ScrollView,Image ,TouchableOpacity} from 'react-native'
import React,{useContext} from 'react'
import gana from './Gana'
import Cartitem from './Cartitem'
import { shopcart } from './Shopcontext'

const Cart = () => {

  const{cartItems,addTocart,removeFromcart,deleteItem,getTotalAmount} =useContext(shopcart)
  
  const totalrs = getTotalAmount;

  return (
    <ScrollView contentContainerStyle={{width:"100%",height:"100%",alignItems:"center",backgroundColor:"white"}}>
      
      {getTotalAmount() > 0 ?(
          <View style={{width:"100%",height:50,borderRadius:10,backgroundColor:"white",alignItems:"center",justifyContent:"space-evenly",elevation:4,flexDirection:"row"}}>
            <Text style={{fontSize:20,fontWeight:"700",color:"gray"}}>Total Bill : {getTotalAmount()}</Text>
            <TouchableOpacity
        style={{alignItems:"center",justifyContent:"center",width:100,height:35,borderWidth:1,borderColor:"green",borderRadius:10}}
        // onPress={()=>addTocart(id)}
        ><Text style={{fontSize:15,color:"green"}}>Place Order</Text></TouchableOpacity>
          </View>
      ):(
        <View style={{width:"100%",height:"100%",backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
      <Image style={{width:200,height:200}} source={require('./Assets/cart.png')}/>
      </View>
      )}

      {gana.map((product)=>{
        if(cartItems[product.id]!==0){
          return(
            <Cartitem data={product}/>
          
          )
        }
        
      })
      
      }
      
      

      

      
   </ScrollView>
  )
}

export default Cart


