import { View, Text ,StyleSheet ,Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React,{useContext,useState} from 'react'
import Foodmap from './Foodmap';
import { useNavigation } from '@react-navigation/native';
import { shopcart } from './Shopcontext';
import gana from './Gana';

const Productdetail = ({route}) => {
   

    const{cartItems,addTocart,removeFromcart,deleteItem,getTotalAmount} =useContext(shopcart)

    const {product} = route.params;
   
    const [showMessage, setShowMessage] = useState(false);

    const navigation = useNavigation();

    const reload = (newProduct) =>{
      navigation.navigate('Productdetail',{product:newProduct})
    }
    
    // const handleAddtocart =(productId)=>{
    //   addTocart(productId);
    //   console.log(cartItems);
    // }
    
   

  return (
    <View style={{alignItems:"center"}}>
    <ScrollView contentContainerStyle={styles.detail}>
  <View style={styles.show}>
    <ImageBackground style={styles.image} source={{uri:"https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg"}}/>
    <View style={styles.container}>
      <Image style={styles.productImage} source={{ uri: product.image }} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>₹{product.price}</Text>
      <View style={styles.rate}>
      <Image style={styles.plate} source={require('./Assets/star.png')} />
      <Text style={styles.productRating}>{product.rating}</Text>
      </View>
      <Text style={styles.productPlace}>{product.palce}</Text>
      <TouchableOpacity style={styles.btn}
       onPress={() => {
        addTocart(product.id);
        setShowMessage(true);

        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
              }}
      >
        <Text style={{color:"green",fontWeight:"400"}}>Add to cart</Text>
      </TouchableOpacity>
    </View>
    </View>

    <Text style={{fontSize:17,fontWeight:"bold",color:"black"}}>Offers</Text>
    <ScrollView horizontal contentContainerStyle={{height:100,paddingLeft:10,alignItems:"center",gap:10,flexDirection:"row"}}>
    <View style={styles.offercard}>
        <Image style={{width:30,height:30}} source={require('./Assets/discount.png')}/>
        <Text style={{fontSize:17,fontWeight:"bold",color:"black"}}>FLAT 35% OFF</Text>
    </View>
     
    <View style={styles.offercard}>
        <Image style={{width:30,height:30}} source={require('./Assets/upi.png')}/>
        <Text style={{fontSize:17,fontWeight:"bold",color:"black"}}>FLAT 50% OFF</Text>
    </View>
    
    <View style={styles.offercard}>
        <Image style={{width:50,height:50}} source={require('./Assets/hdfc.png')}/>
        <Text style={{fontSize:17,fontWeight:"bold",color:"black"}}>FLAT 15% OFF</Text>
    </View>

    </ScrollView>

    <Text style={{fontSize:17,fontWeight:"bold",color:"black"}} >Recommended</Text>
    
   
    <Foodmap/>

   
   
    </ScrollView>
    
    {showMessage && (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Item added to cart!</Text>
        <TouchableOpacity
          style={styles.viewCartButton}
          onPress={()=>navigation.navigate('Cart')}>
          <Text style={{color: 'black',fontSize:12}}>View Cart</Text>
        </TouchableOpacity>
      </View>
      )}
</View>

  )
}

export default Productdetail;

const styles = StyleSheet.create({
    detail:{
        backgroundColor:"white",
        alignItems:"center"
    },
    show:{
        width:"100%",
        height:360,
        alignItems:"center",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    backgroundColor:"black",
    justifyContent:"space-evenly"
    },
    container: {
      width:"85%",
      height:300,
      backgroundColor:"white",
      alignItems:"center",
      justifyContent:'space-evenly',
      borderRadius:10,
      elevation:5,
      top:-200

    },
    productImage: {
      width: 150,
      height: 140,
      borderRadius: 10,
      
    },
    productName: {
      fontSize: 17,
      fontWeight: 'bold',
      textAlign:"center"
    },
    productPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:"center",
        color:"green"
      },
    productRating: {
      fontSize: 15,
   
      color:"gray"
    },
    productPlace: {
      fontSize: 12,
      color: 'gray',
      
    },
    plate: {
    width: 20,
    height: 20,
 
  },
  
  rate:{
    width:"40%",
    height:30,
    // backgroundColor:"yellow",
    flexDirection:"row",
    gap:10
  },
  btn:{
    width:"30%",
    height:40,
    borderRadius:10,
    borderColor:"green",
    borderWidth:1,
    alignItems:"center",
    justifyContent:"center"
  },
  image:{
    width: "100%",
    height:510,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    opacity:0.6
  },

  offercard: {
    width: 200,
    height: 70,
    borderRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 5,
  },
  messageContainer: {
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 5,
    width: '95%',
    height: 80,
    flexDirection:"column",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius:10,
    opacity:0.9
  },

  messageText: {
    color: 'white',
  },

  viewCartButton: {
    backgroundColor: "white",
    height:30,
    width:65,
    borderRadius: 5,
    alignItems:"center",
    justifyContent:"center"
  },
  });