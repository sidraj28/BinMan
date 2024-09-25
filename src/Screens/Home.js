import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
  
    <View style={styles.container}>
      {/* App Title */}
      <Text style={styles.title}>BINMAN</Text>

      {/* Tagline */}
      <Text style={styles.subtitle}>
        Your Partner in Domestic Waste Management
      </Text>

      {/* Description */}
      <Text style={styles.description}>
        Helping you keep your home and environment clean and green
      </Text>

      {/* Button for Services */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Services')}
      >
        <Text style={styles.buttonText}>SCAN YOUR WASTE</Text>
      </TouchableOpacity>

      {/* Recycling Bins Image (You can use any static image here) */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../Images/home1.png')} // Path to your image
          style={styles.binsImage}
        />
      </View>

      <Text style={styles.dash}>
        ------------------------------------------
      </Text>
      <Text style={styles.subtitle2}>
        Our Achievements
      </Text>

     
    </View>
    
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginTop: 40,
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginTop: 0,
    marginBottom: 30,
  },
  dash: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginTop: 0,
    marginBottom: 20,
  },
  subtitle2: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ff0000',
    marginTop: 0,
    marginBottom: 30,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#2E7D32',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginVertical: 10,
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginVertical: 20,
  },
  binsImage: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  navIcon: {
    fontSize: 16,
    color: '#2E7D32',
  },
});

export default HomeScreen;