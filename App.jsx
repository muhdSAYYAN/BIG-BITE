import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Components/Home';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Swiggy from './Components/Swiggy';
import Cart from './Components/Cart';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './Components/Start';
import BottomTab from './Components/BottomTab';
import Productdetail from './Components/Productdetail';
import Shopcontext from './Components/Shopcontext';
import Address from './Components/Address';
import GiftCards from './Components/GiftCards';

const App = () => {

 const Stack = createStackNavigator()

  return (
    <Shopcontext>
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Start" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Bottom" component={BottomTab} />
        <Stack.Screen name="Swiggy" component={Swiggy} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Productdetail" component={Productdetail} />
        <Stack.Screen name="Food" component={Home} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Giftcard" component={GiftCards} />

      </Stack.Navigator>
    </NavigationContainer>
    </Shopcontext>
   
  )
}

export default App