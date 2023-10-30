import {ImageBackground,TextInput,Image, StyleSheet,View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Navbar = () => {

    const navigation = useNavigation();

  return (
    <View >
        <ImageBackground style={styles.navbar} source={{uri:"https://img.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg?size=626&ext=jpg&ga=GA1.1.1321172348.1689748992&semt=ais"}}>
    <View style={styles.nav}>
        <View style={styles.location}>
        <Image style={styles.imag1} source={require('./Assets/navigation.png')}/>
    <Text style={{color:"black",fontSize:20}}>Bengalore</Text>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <Image style={styles.imag} source={require('./Assets/profile.png')}/>
            </TouchableOpacity>
        </View>
        
        <View style={styles.search}>
            <TextInput
              placeholder='Search, Oder, Enjoy, Repeat!'
              placeholderTextColor='gray'
              style={{color:"black"}}
            />
            <View style={{borderRightWidth:1,width:30}}>
                <Image style={styles.imag1} source={require('./Assets/search.png')}/>
            </View>
            <Image style={styles.imag1} source={require('./Assets/mic.png')}/>

        </View>
        </ImageBackground>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    navbar:{
        backgroundColor:"red",
        height:160,
        alignItems:"center",
        justifyContent:"space-around",
    },
    nav:{
        width:"95%",
      height:70,
    //   backgroundColor:"yellow",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"

      
    },
    imag1:{
        width:20,
        height:20
    },
    imag:{
        width:35,
        height:35
    },
    location:{
        width:130,
        height:50,
        // backgroundColor:"white",
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"row"
    },
    search:{
        width:"90%",
        height:50,
        backgroundColor:"white",
        borderWidth:1,
        borderBlockColor:"gray",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"row"
    }

})