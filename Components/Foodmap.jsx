import { StyleSheet,Image,View, Text } from 'react-native'
import React from 'react'
import gana from './Gana'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Foodmap = () => {

 const navigation = useNavigation();

  return (
    <View style={{gap:21,marginTop:20}}>
    {gana.map((item)=>{
        return(
          <TouchableOpacity
          activeOpacity={0.9}
          key={item.id}
           onPress={()=> navigation.navigate('Productdetail',{product:item})}
          >
    <View key={item.id} style={styles.gana}>
      <View style={styles.shadow}>
        <Image style={styles.ganaimg} source={{ uri: item.image }} />
      </View>
      <View style={styles.descri}>
        <Text style={{ fontSize: 17, color: "black", fontWeight: "500" }}>{item.name}</Text>
        <View style={{ width: "65%", height: 23, flexDirection: "row", justifyContent: "space-between" }}>
          <Image style={styles.plate} source={require('./Assets/star.png')} />
          <Text style={{ fontSize: 15, color: "black", fontWeight: "500" }}>{item.rating}</Text>
        </View>
        <Text style={{ maxWidth: 200,fontSize:16,color:"gray"}} numberOfLines={1} >{item.palce}</Text>
        <Text style={{ fontSize:15 }}>Majestic . 2.0 km</Text>
        <View style={{ width: "70%", height: 23, flexDirection: "row", justifyContent: "space-evenly",alignItems:"center",backgroundColor:"#e9d6ff",borderRadius:10 }}>
          <Image style={styles.plate} source={require('./Assets/scooter.png')} />
          <Text style={{ fontSize: 12, color: "#8208F3", fontWeight: "500" }}>FREE DELEVERY</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
    )
})}
   </View>
  )
}

export default Foodmap

const styles = StyleSheet.create({
   gana:{
    width:"95%",
    height:150,
    // backgroundColor:"yellow",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    gap:10
   },
   shadow:{
    width:140,
    height:150,
    borderRadius:10,
    elevation:7,
    alignItems:"center"
   
   },
   ganaimg:{
    width:130,
    height:160,
    borderRadius:10
   },
   descri:{
    width:"50%",
    height:140,
    backgroundColor:"white",
    justifyContent:"space-evenly"
   } ,
    plate: {
    width: 20,
    height: 20,
 
  },

})