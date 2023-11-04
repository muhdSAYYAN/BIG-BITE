import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Video from 'react-native-video';
import Food from '../Components/Assets/spa.mp4'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Start = () => {
  
    const navigation = useNavigation(); 

    const handleSignUpPress = () => {
      navigation.navigate('Signup'); 
    };

  return (
   
    <View style={styles.container}>
     <Video
  source={Food}
  style={styles.backgroundVideo}
  muted={true}
  repeat={true}
  resizeMode="cover"
/>
 
<View style={styles.overlay} />

<View style={styles.contentContainer}>
    <Image style={{width:60,height:60,tintColor:"white",opacity:0.9}} source={require("../Components/Assets/big.png")}/>
        <Text style={styles.name1}>Big Bite</Text>
        <View>
          <Text style={{fontSize:19,color:"white",opacity:0.9}}>Get Your Delicious Items</Text>
        </View>
        <GestureHandlerRootView>
      <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
        <Text style={{fontSize:19,color:"white",opacity:0.9}}>Get Started</Text>
      </TouchableOpacity>
      </GestureHandlerRootView>
      </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center"
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
   
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black', 
    opacity: 0.2, 
  },
  contentContainer: {
   top:500,
    width:"90%",
    height:230,
    // backgroundColor:"yellow",
    justifyContent:"space-evenly",
    paddingLeft:10,
  
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'darkorange', // Change the button's background color as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10
  },
   
    name1:{
        fontSize:35,
        fontWeight:"bold",
        color:"white",
        // opacity:0.7
      
    },
});

export default Start;
