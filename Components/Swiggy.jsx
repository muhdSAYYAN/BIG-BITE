import {ScrollView,Image, StyleSheet,View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navbar from './Navbar'
import Carousel from 'react-native-snap-carousel';


const CarouselItem = ({ item }) => (
  <View style={styles.carouselItem}>
    <Image
      style={styles.carouselImage}
      source={{ uri: item.imageUri }}
    />
  </View>
);

const GrocerieItem = ({ item }) => (
  <View style={styles.carouselItem}>
    <Image
      style={styles.carouselImage}
      source={{ uri:item.image}}
    />
  </View>
);

const Swiggy = () => {

  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('name');
        const storedMobileNumber = await AsyncStorage.getItem('mobileNumber');
       setMobileNumber(storedMobileNumber)
        setName(storedName);
        
      } catch (error) {
        console.error('Error retrieving data: ', error);
      }
    };

    retrieveData();
  }, []);

  const carouselData = [
   
    { imageUri: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png' },
    { imageUri: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png' },
    { imageUri: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png' },
    { imageUri: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png' },
  ];

  const data = [
   
    { image: 'https://www.jiomart.com/images/product/original/490001795/maaza-mango-drink-1-2-l-product-images-o490001795-p490001795-0-202301272130.jpg?im=Resize=(360,360)' },
    { image: 'https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(360,360)' },
    { image: 'https://www.jiomart.com/images/product/original/490001992/brooke-bond-red-label-strong-blend-tea-1-kg-product-images-o490001992-p490001992-0-202304281622.jpg?im=Resize=(360,360)' },
    { image: 'https://www.jiomart.com/images/product/original/491696355/lay-s-india-s-magic-masala-potato-chips-90-g-product-images-o491696355-p590121911-0-202307142035.jpg?im=Resize=(360,360)' },
  ];
  
  
  
  return (
    <ScrollView >
      <Navbar/>
      <ScrollView contentContainerStyle={{backgroundColor:"white",paddingLeft:10,justifyContent:"space-evenly",height:500}}>
        <Text style={{fontSize:24,color:"orange"}}>Welcome  {name}!  😄</Text>
        <View style={styles.card}>
            <View style={{width:"59%",height:100,justifyContent:"space-evenly",paddingLeft:10}}>
            <Text style={styles.heading}>ORDER FOOD</Text>
            <Text style={{color:"gray"}}>FROM GREAT RESTAURANTS NEAR YOU!</Text>
            </View>

         
  <Carousel
    style={styles.caro}
    layout={'stack'}              // Set the layout to 'stack'
    layoutCardOffset={18}         // Set the layoutCardOffset to 18
    data={carouselData}
    sliderWidth={270}
    itemWidth={200}
    renderItem={CarouselItem}
  />

        </View>
        <View style={styles.card}>
            <View style={{width:"59%",height:100,justifyContent:"space-evenly",paddingLeft:10}}>
            <Text style={styles.heading}>ORDER GROCERIES</Text>
            <Text style={{color:"gray"}}>DAILY ESSENTIALS DELIVERED !</Text>
            </View>

            <Carousel
    style={styles.caro}
    layout={'stack'}              // Set the layout to 'stack'
    layoutCardOffset={18}         // Set the layoutCardOffset to 18
    data={data}
    sliderWidth={270}
    itemWidth={200}
    renderItem={GrocerieItem}
  />


        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
        <View style={styles.card1}>
            <View style={{width:"55%",height:50,justifyContent:"space-evenly"}}>
            <Text style={styles.heading}>DINEOUT</Text>
            <Text style={{fontSize:11}}>EAT OUT & SAVE</Text>
            </View>
            <Image style={{width:50,height:50,borderRadius:10}} source={{uri:"https://cdn.pixabay.com/photo/2016/11/22/18/58/bowl-1850039_640.jpg"}}/>
        </View>
        <View style={styles.card1}>
            <View style={{width:"55%",justifyContent:"space-evenly"}}>
            <Text style={styles.heading}>GENIE</Text>
            <Text style={{fontSize:11}}>EAT OUT & SAVE</Text>
            </View>
            <Image style={{width:50,height:50,borderRadius:10}} source={{uri:"https://previews.123rf.com/images/austler/austler2303/austler230308483/201077317-gift-box-with-green-bow-vector-illustration-in-cartoon-style.jpg"}}/>
        </View>
        </View>
        
      </ScrollView>

      <View style={{height:300,width:"50%",marginLeft:40,justifyContent:"space-evenly"}}>
        <Text style={{fontSize:70,fontWeight:"900",color:"gray"}}>Live it up!</Text>
        <Text style={{width:400,fontSize:16,color:"gray"}}>Crafted with ❤️ in Bengaluru, India</Text>

      </View>

    </ScrollView>
  )
}

export default Swiggy

const styles = StyleSheet.create({
    card:{
        width:"95%",
        height:130,
        borderRadius:15,
        backgroundColor:"white",
        elevation:7,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
    },
    heading:{
        fontSize:13,
        fontWeight:"bold",
        color:"black"
    },
    card1:{
      width:"49%",
      height:70,
      borderRadius:15,
      backgroundColor:"white",
      elevation:7,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-evenly",
      
  },

  carouselItem: {
    width: 80,
    height: 111,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    marginLeft:20,
    alignItems: 'center',
    elevation:5,
    justifyContent: 'center',
  },
  carouselImage: {
    width: 80,
    height: 110,
    borderRadius: 15,
  },
})