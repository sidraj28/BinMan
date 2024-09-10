import React from "react";

import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Forget from '../Screens/Forget';
import Home from '../Screens/Home';
import Devices from '../Screens/Devices';
import ServiceScreen from '../Screens/ServiceScreen';
import ContactScreen from '../Screens/ContactScreen';
import Profile from '../Screens/Profile';
import ChatBotScreen from '../Screens/ChatBotScreen'
import { View, Text, StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Home: require('../Images/home.png'),       
  Devices: require('../Images/about.png'),     
  Services: require('../Images/customer-service.png'), 
  Contact: require('../Images/telephone.png'),   
  Profile: require('../Images/developing.png'), 
};

const HomeTabs = () => {
  return (
  
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            source={icons[route.name]}  
            style={[
              styles.icon,
              { tintColor: focused ? '#5D76A9' : 'gray' },  
            ]}
          />
        ),
        tabBarShowLabel: true, 
      })}
    >
      
          <Tab.Screen       options ={{headerShown  : false}} name="Home" component={Home} />
          <Tab.Screen        options ={{headerShown  : false}} name="Devices" component={Devices} />
          <Tab.Screen       options ={{headerShown  : false}} name="Services" component={ServiceScreen} />
          <Tab.Screen       options ={{headerShown  : false}} name="Contact" component={ContactScreen} />
          <Tab.Screen       options ={{headerShown  : false}} name="Profile" component={Profile} />
    </Tab.Navigator>
 
  );
};


const CustomTabBarIcon = ({ title }) => {
  return (
    <View style={styles.iconContainer}>
      <Text style={styles.iconText}>{title}</Text>
    </View>
  );
};







export default function  AppNavigator () {
    return(
     
  
    <Stack.Navigator   initialRouteName="Splash">

  
    <Stack.Screen
        options ={{headerShown  : false}}
        name = "Splash"
        component = {Splash}/>
      
   <Stack.Screen
        options ={{headerShown  : false}}
        name = "Login"
        component = {Login}/>
        
         <Stack.Screen
        options ={{headerShown  : false}}
        name = "Signup"
        component = { Signup}/>

        <Stack.Screen
        options ={{headerShown  : false}}
        name = "Forget"
        component = {Forget}/>

       <Stack.Screen
        options ={{headerShown  : false}}
        name = "Home"
        component = {HomeTabs}/>

<Stack.Screen
        options ={{headerShown  : false}}
        name = "ChatBotScreen"
        component = {ChatBotScreen}/>
  
        </Stack.Navigator>
      

    );
};
const styles = StyleSheet.create({
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
   
    },
    iconText: {
      fontSize: 12,
      color:'#5D76A9',
    },
  icon:{
    width: 30,
    height:30,
    padding:0,
  },
  });
