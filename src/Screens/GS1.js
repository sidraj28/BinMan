import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

export default function JoinTheCycle({ navigation }) {
  return (
    <ImageBackground
      source={require('../Images/g1.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Choose Green</Text>
          <Text style={styles.subtitle}>The App That Puts the Planet First!</Text>
          <View style={styles.dotsContainer}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.dotInactive]} />
            <View style={[styles.dot, styles.dotInactive]} />
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => navigation.navigate('GS2')}
            >
              <Text style={styles.arrowText}>→</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 16,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 6,
    marginHorizontal: 4,
  },
  dotInactive: {
    opacity: 0.5,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  skipText: {
    color: 'white',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: 'white',
    fontSize: 24,
  },
});