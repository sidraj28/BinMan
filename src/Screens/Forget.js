import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity ,Alert,useColorScheme} from 'react-native';
import auth from '@react-native-firebase/auth';

const Forget = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const colorScheme = useColorScheme();

const placeholderTextColor= colorScheme === 'dark' ? '#ccc' : '#666';
const keyboardTypeColor= colorScheme === 'dark' ? '#ccc' : '#666';

  const handleResetPassword = () => {
    auth().sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Password reset email sent!', 'Check your email to reset your password.');
        navigation.navigate('Login');  // Adjust navigation if needed
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FORGOT PASSWORD</Text>
      <Text style={styles.subtitle}>TROUBLE LOGGING IN?</Text>
      <Text style={styles.description}>
        Enter your email and we will send you a link to reset your password.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={placeholderTextColor}
        keyboardType="email-address"
        keyboardTypeColor={keyboardTypeColor}
        value={email}
        onChangeText={setEmail}
         
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword} >
        <Text style={styles.buttonText}>forgotPassword</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'#5D76A9',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
    color:'black',
  },
  description: {
    textAlign: 'center',
    marginBottom: 16,
    color:'black',

  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
    color:'black',

  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#5D76A9',
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
});

export default Forget;