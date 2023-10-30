import {ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import food from './Food'
import Foodmap from './Foodmap'


const Home = () => {


  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <Navbar/>
      <View style={styles.offer}>
       <Image style={styles.offerimag} source={{uri:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/731031544495581f1d6884624aa3ecf5"}}/>
      </View>
      <Text style={{fontSize:18,color:"black",marginTop:10,marginLeft:15,fontWeight:"bold"}}>What's on your mind?</Text>
      <ScrollView horizontal contentContainerStyle={styles.fooditem}> 
      <View>
      <View style={{flexDirection:"row"}}>
      {food.slice(0,9).map((item)=>{
        return(
         <View style={styles.foodimg}>
          <Image style={styles.itemimg} source={{uri:item.image}}/>
          {/* <Text>{item.namw}</Text> */}
         </View>
          )})}
          </View>
          <View style={{flexDirection:"row"}}>
      {food.slice(9,18).map((item)=>{
        return(
         <View style={styles.foodimg}>
          <Image style={styles.itemimg} source={{uri:item.image}}/>
          {/* <Text>{item.namw}</Text> */}
         </View>
          )})}
          </View>
          </View>
      </ScrollView>
      <ScrollView horizontal contentContainerStyle={styles.filter}>
        <View style={styles.filtervalue}><Text style={{color:"black"}}>Filter</Text></View>
        <View style={styles.filtervalue}><Text style={{color:"black"}}>Sort By</Text></View>
        <View style={styles.filtervalue}><Text style={{color:"black"}}>Fast Delivery</Text></View>
        <View style={styles.filtervalue}><Text style={{color:"black"}} >New on Swiggy</Text></View>
        <View style={styles.filtervalue}><Text style={{color:"black"}}>Ratings 4.0+</Text></View>
        <View style={styles.filtervalue}><Text style={{color:"black"}}>Pure Veg</Text></View>
        <View style={styles.filtervalue}><Text style={{color:"black"}}>Offers</Text></View>
        <View style={styles.filtervalue}><Text style={{color:"black"}}>Rs. 300-Rs. 600</Text></View>
        <View style={styles.filtervalue}><Text style={{color:"black"}}>Less than Rs. 300</Text></View>
      </ScrollView>
      <Text style={{fontSize:18,color:"black",marginTop:10,marginLeft:15,fontWeight:"bold"}}>728 restaurants to explore</Text>
     

     <Foodmap/>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  offer:{
     height:200,
     marginTop:10,
     alignItems:"center"
  },
  offerimag:{
    width:"95%",
    height:200
  },
  fooditem:{
    marginTop:10,
    height:250,
    // backgroundColor:"yellow",
   
  },
  foodimg:{
    width:110,
    height:120,
    // backgroundColor:"red"
  },
  itemimg:{
    width:"100%",
    height:120
  },
  filter:{
    height:50,
    // backgroundColor:"red",
    alignItems:"center",
    justifyContent:"space-evenly",
    flexDirection:"row",
    gap:10,
  },
  filtervalue: {
    padding: 6, 
    borderRadius: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin:3, 
    flex: 1, 
    borderWidth:0.5,
    
    
  },
})