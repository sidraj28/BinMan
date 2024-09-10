import {View,Text,Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () =>{
const navigation= useNavigation();
useEffect (() =>{
setTimeout (() =>{
  navigation.navigate('Login');
},3000);
},[]);
return (
<View style ={{flex:1, justifyContent : 'center' , alignItems : 'center', alignSelf:'center', color:'white'}}>
<Image source ={require('../Images/BKA.jpg')}
style ={{
width:200,
height :200,
borderRadius :100,
resizeMode : 'center',
}}
/>
<Text style ={{
  fontSize:25,
  color:'#5D76A9',
  fontWeight:'bold',
}}>Bekar Ko Aakar</Text>
</View>
);
};
export default Splash;