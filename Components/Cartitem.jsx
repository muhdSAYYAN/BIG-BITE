import { View, Text,Image } from 'react-native'
import React,{useContext} from 'react'
import { shopcart } from './Shopcontext';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Cartitem = (props) => {

     const {id,name,image,price}=props.data;
     const{cartItems,addTocart,removeFromcart,deleteItem,getTotalAmount} =useContext(shopcart)

  return (
    <View style={{width:"90%",height:140,elevation:5,borderRadius:10,justifyContent:"space-evenly",alignItems:"center",backgroundColor:"white",marginTop:10}}>
       <View style={{width:"100%",height:90,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
       <Image style={{width:70,height:70}} source={{uri:props.data.image}}/>
       <View style={{width:"67%",height:50,justifyContent:"space-between",alignItems:"center"}}>
       <Text style={{fontSize:16,color:"black"}}>{name}</Text>
       <View style={{width:"100%",flexDirection:"row",justifyContent:"space-evenly"}}>
       <Text style={{fontSize:16,color:"green"}}>₹{price}</Text>
       <TouchableOpacity
        style={{alignItems:"center",justifyContent:"center",width:20,height:20,borderWidth:1,borderColor:"orange"}}
        onPress={()=>addTocart(id)}
        ><Text style={{fontSize:15,color:"gray"}}>+</Text></TouchableOpacity>
       <Text style={{fontSize:15,color:"gray"}}>{cartItems[id]}</Text>
       <TouchableOpacity
        style={{alignItems:"center",justifyContent:"center",width:20,height:20,borderWidth:1,borderColor:"orange"}}
        onPress={()=>removeFromcart(id)}
        ><Text style={{fontSize:15,color:"gray"}}>-</Text></TouchableOpacity>
        </View>
        </View>
       </View>

       <View style={{width:"100%",height:50,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
      
       <TouchableOpacity
        style={{alignItems:"center",justifyContent:"center",width:80,height:30,borderWidth:1,borderColor:"red",borderRadius:10}}
        onPress={()=>deleteItem(id)}
        ><Text style={{fontSize:15,color:"red"}}>Remove</Text></TouchableOpacity>

       </View>
      
    </View>
  )
}

export default Cartitem