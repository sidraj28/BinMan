// SignupScreen.js
import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , Alert, useColorScheme} from 'react-native';
import auth from '@react-native-firebase/auth';

const Signup = ({navigation})  => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const colorScheme = useColorScheme();

  const placeholderTextColor= colorScheme === 'dark' ? '#ccc' : '#666';

  const handleCreateAccount = () => {
    auth().createUserWithEmailAndPassword(email, password).then(()=>{
      Alert.alert("user created with these credentials");
      navigation.navigate("Login");
    })
    
  .catch (error=> {
    console.error(error.nativeErrorMessage);
    Alert.alert(error.Message)
  }); 
    
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={placeholderTextColor}
        value={username}
        onChangeText={ text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={placeholderTextColor}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={placeholderTextColor}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button}onPress={ handleCreateAccount}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
      
      <Text style={styles.loginText}>
        Already Registered? 
        <Text style={styles.loginLink} onPress={() =>   navigation.navigate('Login')}>
          Log in here
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
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
    color: '#333',
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
  loginText: {
    color: '#aaa',
    fontSize: 14,
  },
  loginLink: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Signup ;