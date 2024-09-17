// LoginScreen.js
import React , {useState}  from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , Image,  Alert, useColorScheme} from 'react-native';
import {getAuth , signInWithEmailAndPassword } from '@react-native-firebase/auth';



const Login = ({navigation}) => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const colorScheme = useColorScheme();

const placeholderTextColor= colorScheme === 'dark' ? '#ccc' : '#666';
  const handleLogin =  () => {
    const auth = getAuth();
     signInWithEmailAndPassword(auth , email, password).then((res)=>{
        console.log(res)
        Alert.alert("Logged in");
        const user = res.user;
        navigation.navigate("Home");
      })
     
    .catch (error=> {
      console.log(error)
      Alert.alert("create your account first");
    })
    }
  return (
    <View style={styles.container}>
       <View style={styles.logoContainer}>
     <Image source ={require('../Images/bin.jpg')}
style ={{
width:200,
height :100,
resizeMode : 'contain',
position:'static',
top:10,
bottom:0,
}}
/>
  </View>
       <View style={styles.sl}>
        <Text style={styles.slogan}>Smart Bins, Smarter Cities</Text>
        </View>
        <Text style={styles.title}>Sign in to Continue</Text>

      <View style={styles.formContainer}>
        <Text style={styles.logo}>Login</Text>

      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={placeholderTextColor}
        value={email}
        onChangeText={ text => setEmail(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={placeholderTextColor}
        value={password}
        onChangeText={ text =>setPassword(text)}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

     <TouchableOpacity> 
      <Text style={styles.signupText}>
        Not have account? 
        <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>
          Signup here
        </Text>
      </Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.forgotPassword } onPress={() => navigation.navigate('Forget')}>Forget Password?</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  logoContainer: {
    flex:1,
    alignItems: 'center',
    marginBottom:0,
    backgroundColor:'#0B6623',
paddingLeft:100 ,
paddingRight:100,
paddingBottom:30,
paddingTop:30,
position:'absolute',
   top:0,
   bottom:580,
},
sl: {
  width:500,
  height:40,
   marginBottom:10,
   paddingLeft:100,
   paddingRight:100,
   paddingTop:5,
  alignItems: 'center',
  backgroundColor:'#0B6623',
  position:'absolute',
  bottom:0,
  top:205,
//
},
  logo: {
    marginBottom:0,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign:'center',
    marginTop:90,
    marginBottom:30,
  },
  slogan: {
    fontSize: 20,
    color: 'white',
    paddingLeft:10,
  },
  formContainer: {
    width: '80%',
    position:'static',
    top:0,
    bottom:20,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    position:'static',
  bottom:40,
  top:160,
  color:'black'
  },

  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'black',
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0B6623',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#aaa',
    fontSize: 14,
    textAlign:'center',

  },
  forgotPassword: {
    color: '#0B6623',
    marginBottom: 20,
    textDecorationLine:'underline',
    textAlign:'center',
  },
  signupLink: {
    color: '#0B6623',
    fontWeight: 'bold',
    textAlign:'center',
   
  },
});

export default Login;