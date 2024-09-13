// LoginScreen.js
import React , {useState}  from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , Image,  Alert, useColorScheme} from 'react-native';
import { useTheme } from '../navigation/ThemeProvider';
import auth from '@react-native-firebase/auth';
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
     <Image source ={require('../Images/BKA.jpg')}
style ={{
width:200,
height :200,
borderRadius :100,
resizeMode : 'center',
}}
/>
      <Text style={styles.title}>LOGIN</Text>
      
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'green',
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
    backgroundColor: 'green',
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
  },
  forgotPassword: {
    color: 'green',
    marginBottom: 20,
    textDecorationLine:'underline',
  },
  signupLink: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Login;