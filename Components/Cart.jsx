import { View, Text ,ScrollView,Image ,TouchableOpacity} from 'react-native'
import React,{useContext} from 'react'
import gana from './Gana'
import Cartitem from './Cartitem'
import { shopcart } from './Shopcontext'
import { useNavigation } from '@react-navigation/native'

const Cart = () => {

  const{cartItems,addTocart,removeFromcart,deleteItem,getTotalAmount} =useContext(shopcart)
   
  const navigation =useNavigation();

  const totalrs = getTotalAmount();


  const TotalAmount = getTotalAmount() + 7.45;

  return (
    <View style={{width:"100%",height:"100%",alignItems:"center",backgroundColor:"white"}}>
   <View style={{width:'100%',height:30,alignItems:"center"}}>
    <Text style={{fontSize:24,color:"gray"}}>Cart</Text>
   </View>
      
<ScrollView contentContainerStyle={{ flexGrow: 1, width:"100%", alignItems: 'center', backgroundColor: 'white',justifyContent:"space-evenly" }}>      
    

      {gana.map((product)=>{
        if(cartItems[product.id]!==0){
          return(
            <Cartitem data={product}/>
          
          )
        }
        
      })
      
      }
      <TouchableOpacity style={{width:100,height:50,backgroundColor:"black",alignItems:"center",justifyContent:"center",borderRadius:10,marginTop:10}}
       onPress={()=>navigation.navigate('Food')}>
            <Text style={{color:"white"}}>Oder More</Text>
          </TouchableOpacity>
      
      

      

      
   </ScrollView>
   {getTotalAmount() > 0 ?(
          <View style={{width:"90%",height:300,backgroundColor:"white",elevation:5,paddingLeft:30,justifyContent:"space-evenly",borderRadius:10,marginTop:10}}>
          <Text style={{color:"gray",fontSize:16,fontWeight:"500"}}>Sub total : {totalrs}</Text>
          <Text style={{color:"gray",fontSize:16,fontWeight:"500"}}>GST : 7.45 </Text>
          <Text style={{color:"gray",fontSize:16,fontWeight:"500"}}>Total : {TotalAmount}</Text>
          <TouchableOpacity style={{width:"90%",height:50,backgroundColor:"red",alignItems:"center",justifyContent:"center",borderRadius:10}}
          
          >
            <Text style={{color:"white"}}>Order Now</Text>
          </TouchableOpacity>
         </View>
      ):(
        <View style={{width:"100%",height:"100%",backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
      <Image style={{width:200,height:200}} source={require('./Assets/cart.png')}/>
      </View>
      )}
   
   

   </View>
  )
}

export default Cart


