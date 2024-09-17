import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/g3.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Save your Tomorrow</Text>
        <Text style={styles.subtitle}>We're here to help you make it happen.</Text>

        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.dotInactive]} />
          <View style={[styles.dot, styles.dotInactive]} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.getStartedButton}onPress={() => navigation.navigate('Splash')}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.3,
  },
  content: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotInactive: {
    backgroundColor: 'gray',
  },
  getStartedButton: {
    marginTop: 30,
    backgroundColor: '#38A169',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  getStartedText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});