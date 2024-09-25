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
import ChatBotScreen from '../Screens/ChatBotScreen';
import GS1 from '../Screens/GS1';
import GS2 from '../Screens/GS2';
import GS3 from '../Screens/GS3';
import Toilets from "../Screens/Toilets";
import Dustbins from '../Screens/Dustbins';
import Vendors from "../Screens/Vendors";
import ExchangePoint from "../Screens/ExchangePoint";

import { View, Text, StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Home: require('../Images/home.png'),       
  Devices: require('../Images/Devices.png'),     
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
              { tintColor: focused ? 'green' : 'grey' },  
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
     
  
    <Stack.Navigator   initialRouteName="GS1">

<Stack.Screen
        options ={{headerShown  : false}}
        name = "GS1"
        component = {GS1}/>

<Stack.Screen
        options ={{headerShown  : false}}
        name = "GS2"
        component = {GS2}/>

<Stack.Screen
        options ={{headerShown  : false}}
        name = "GS3"
        component = {GS3}/>
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

<Stack.Screen
        options ={{headerShown  : false}}
        name = "Vendors"
        component = {Vendors}/>

<Stack.Screen
        options ={{headerShown  : false}}
        name = "Toilets"
        component = {Toilets}/>

<Stack.Screen
        options ={{headerShown  : false}}
        name = "Dustbins"
        component = {Dustbins}/>

<Stack.Screen
        options ={{headerShown  : false}}
        name = "ExchangePoint"
        component = {ExchangePoint}/>
  

  
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
      color:'green',
      backgroundColor:'green',
    },
  icon:{
    width: 30,
    height:30,
    padding:0,
  },
  });
