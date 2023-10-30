import { View, Text ,Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Swiggy from './Swiggy';
import Home from './Home';
import Cart from './Cart';
import Profile from './Profile';
import Start from './Start';




const BottomTab = () => {
    const Tab = createBottomTabNavigator();

    return (
    //   <NavigationContainer independent={true}>
        
      <Tab.Navigator 
      initialRouteName='Food'
       screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black', 
        tabBarInactiveTintColor: 'gray', 
      }}>
         <Tab.Screen name='Swiggy' component={Swiggy}
         options={{
          tabBarIcon:({focused}) =>{
            return(
             <Image source={require('./Assets/swiggy.png')}
             style={{tintColor: focused ? 'black' : 'gray', width:31,height:30}}
             />
            
             )
          }
        }}/>
        <Tab.Screen name='Food' component={Home}
        options={{
          tabBarIcon:({focused}) =>{
            return(
             <Image source={require('./Assets/salad.png')}
             style={{tintColor: focused ? 'black' : 'gray', width:29,height:25}}
             />
            
             )
          }
        }}/>
        {/* <Tab.Screen name='Sign' component={Signup}
        options={{
          tabBarIcon:({focused}) =>{
            return(
             <Image source={require('./Components/Assets/swiggy.png')}
             style={{tintColor: focused ? 'black' : 'gray', width:31,height:30}}
             />
            
             )
          }
        }}/> */}
        <Tab.Screen name='Cart' component={Cart}
        options={{
          tabBarIcon:({focused}) =>{
            return(
             <Image source={require('./Assets/add.png')}
             style={{tintColor: focused ? 'black' : 'gray', width:31,height:30}}
             />
            
             )
          }
        }}
        />
        <Tab.Screen name='Profile' component={Profile}
         options={{
          tabBarIcon:({focused}) =>{
            return(
             <Image source={require('./Assets/user.png')}
             style={{tintColor: focused ? 'black' : 'gray', width:31,height:30}}
             />
            
             )
          }
        }}/>
        {/* <Tab.Screen name='video' component={Start}/> */}
      </Tab.Navigator>
    //   </NavigationContainer>
     
    )
}

export default BottomTab