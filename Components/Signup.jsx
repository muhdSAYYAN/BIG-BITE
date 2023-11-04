import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [Pincode,setPincode] = useState('')
  const navigation = useNavigation();
  const [isRegistered, setIsRegistered] = useState(false);

  const storedData = async () => {
    if (name && mobileNumber && Address) {
      try {
        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('mobileNumber', mobileNumber);
        await AsyncStorage.setItem('Address',Address);
        await AsyncStorage.setItem('Pincode',Pincode)
        setIsRegistered(true);
        navigation.navigate('Bottom');
      } catch (error) {
        console.error('Error storing data:', error);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground style={styles.signup} source={{ uri: "https://w0.peakpx.com/wallpaper/271/323/HD-wallpaper-sandwich-food-lover-food-sandwich-thumbnail.jpg" }}>
        <View style={styles.signcont}>
          <Text style={styles.txt}>Sign up</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your name'
            placeholderTextColor="gray"
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder='Enter your current address'
            placeholderTextColor="gray"
            onChangeText={text => setAddress(text)}
          />
          <TextInput
            style={styles.input}
            placeholder='Enter pincode'
            placeholderTextColor="gray"
            onChangeText={text => setPincode(text)}
          />
          <TextInput
            style={styles.input}
            placeholder='Enter 10 digit mobile number'
            placeholderTextColor="gray"
            onChangeText={text => setMobileNumber(text)}
          />
          <TouchableOpacity
            style={[styles.otp, isRegistered ? styles.registered : null]}
            onPress={event => {
              event.persist();
              storedData(event);
            }}
          >
            <Text style={{ color: "white", fontSize: 17 }}>Register</Text>
          </TouchableOpacity>
          {(!name || !mobileNumber || !Address || !Pincode) && <Text style={styles.errorText}>Please fill all these</Text>}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signup: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  signcont: {
    width: "90%",
    height: 400,
    backgroundColor: "white",
    padding: 15,
    opacity: 0.9,
    justifyContent: "space-evenly",
    borderRadius: 10
  },
  txt: {
    fontSize: 20,
    color: "black"
  },
  input: {
    width: "95%",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 10,
    color: "black",
  },
  otp: {
    backgroundColor: "orange",
    opacity: 0.8,
    alignItems: "center",
    width: "95%",
    height: 40,
    justifyContent: "center",
    borderRadius: 10
  },
  registered: {
    backgroundColor: "darkorange"
  },
  errorText: {
    color: "red",
    fontSize: 14,
    textAlign: "center"
  }
});

export default Signup;
