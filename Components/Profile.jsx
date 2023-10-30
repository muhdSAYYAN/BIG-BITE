import { StyleSheet,View, Text ,Image ,ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = () => {


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
  
  

  return (
    <ScrollView  contentContainerStyle={styles.profile}> 
    <View style={styles.prflcard}>
      <Image style={{width:60,height:60}} source={require("../Components/Assets/pic.png")}/>
      <View style={{alignItems:"center"}}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.name1}>+91 {mobileNumber}</Text>
      </View>
      </View>

      <View style={styles.prflcard2}>
      <Text style={styles.name}>Address</Text>
      <Image style={{width:40,height:40}} source={require("../Components/Assets/map.png")}/>
      </View>

      <View style={styles.prflcard2}>
      <Text style={styles.name}>Recent Orders</Text>
      <Image style={{width:40,height:40}} source={require("../Components/Assets/delivery.png")}/>

      </View>

      <View style={styles.prflcard2}>
     <Text style={styles.name}>Gift Cards</Text>
     <Image style={{width:40,height:40}} source={require("../Components/Assets/gift-card.png")}/>

      </View>

      <View style={styles.prflcard2}>
      <Text style={styles.name}>Payments & Refunds</Text>
      <Image style={{width:40,height:40}} source={require("../Components/Assets/refund.png")}/>
      </View>

      <View style={styles.prflcard2}>
      <Text style={styles.name}>Help</Text>
      <Image style={{width:40,height:40}} source={require("../Components/Assets/help-desk.png")}/>
      </View>
 
      <View style={styles.prflcard2}>
     <Text style={styles.name}>Log Out</Text>
     <Image style={{width:40,height:40}} source={require("../Components/Assets/check-out.png")}/>

      </View>
      

    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
    profile:{
      
        backgroundColor:"white",
       alignItems:"center"


    },
   
    name1:{
        fontSize:15,
      color:"black",
   
      
    },
    name:{
        fontSize:19,
      color:"black",
      // backgroundColor:"yellow",
      width:"70%",
      // fontWeight:"500"
    },
    prflcard:{
     width:"93%",
     height:170,
     backgroundColor:"white",
     marginTop:20,
     borderRadius:10,
     alignItems:"center",
     justifyContent:"space-evenly",
     elevation:9
    },
    prflcard2:{
      width:"93%",
      height:90,
      backgroundColor:"white",
      marginTop:20,
      borderRadius:10,
      alignItems:"center",
      justifyContent:"space-evenly",
      elevation:9,
      flexDirection:"row"
     }
})