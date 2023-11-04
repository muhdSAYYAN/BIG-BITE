import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Address = () => {

const [Address,setAddress] = useState();
const [Pincode,setPincode] = useState();


const [isEditmode, setIsEditmode] = useState(false);
const [editedAddress, setEditedAddress] = useState(Address);
const [editedPincode, setEditedPincode] = useState(Pincode);

const toggleEditmode =()=>{
    if(isEditmode){
        setAddress(editedAddress);
        setPincode(editedPincode);
    }
    setIsEditmode(!isEditmode);
}

const handleAddressChange =(text)=>{
    setEditedAddress(text)
}

const handlePincodeChange =(text)=>{
    setEditedPincode(text);
}

useEffect(()=>{
    const retrieveData = async ()=>{
        try{
            const storedAddress = await AsyncStorage.getItem('Address');
            const storedPincode = await AsyncStorage.getItem('Pincode')
            setAddress(storedAddress);
            setPincode(storedPincode);
        }
        catch(error){
             console.error('error retriving data', error)
        }
    }
    retrieveData();
}, []);

  return (
    <View style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"space-around",backgroundColor:"white"}}>
  

      <View style={{width:"90%",height:400,borderRadius:10,backgroundColor:"white",alignItems:"center",justifyContent:"space-around",elevation:5}}>
      <Image style={{width:40,height:40}} source={require("../Components/Assets/map.png")}/>
      
      
      <Text style={{fontSize:18}}>Address</Text>
      <View style={{width:"100%",height:300, alignItems:"center",justifyContent:"space-evenly"}}>
       <View style={{width:"90%",height:100,borderWidth:1,borderColor:"gray",borderRadius:10,borderStyle:"dashed",flexDirection:"row"}}>
       <Text style={{margin:5,color:"gray",fontSize:15,fontWeight:"800"}}>Address : </Text>
       {isEditmode ? (
  <TextInput
    style={{
      flex: 1,
      margin: 5,
      color: 'gray',
      fontSize: 15,
      fontWeight: '800',
    }}
    onChangeText={handleAddressChange}
    value={editedAddress}
  />
) : (
  <ScrollView style={{ flex: 1 }}>
    <Text style={{ margin: 5, color: 'gray', fontSize: 15, fontWeight: '800' }}>{Address}</Text>
  </ScrollView>
)}

       </View>

       <View style={{width:"90%",height:50,borderWidth:1,borderColor:"gray",borderRadius:10,borderStyle:"dashed",flexDirection:"row",alignItems:"center"}}>
       <Text style={{margin:5,color:"gray",fontSize:15,fontWeight:"800"}}>Pincode :</Text>
       {isEditmode ? (
  <TextInput
    style={{
      flex: 1,
      margin: 5,
      color: 'gray',
      fontSize: 15,
      fontWeight: '800',
    }}
    onChangeText={handlePincodeChange}
    value={editedPincode}
  />
) : (
    <Text style={{margin:5,color:"gray",fontSize:15,fontWeight:"800"}}>{Pincode}</Text>
)}

       </View>
       
       <TouchableOpacity 
        style={{width:50,height:40,borderWidth:1,borderColor:"blue",borderRadius:10, alignItems:"center",justifyContent:"center"}}
        onPress={toggleEditmode}
      >
        <Text style={{color:"blue"}}>{isEditmode ? 'Save' : 'Edit'}</Text>
       </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({})