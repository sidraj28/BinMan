import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';

const ExchangePoints = () => {
  return (
    <View style={styles.container}>

      <Image 
        source={{ uri: 'https://placehold.co/300x600' }} 
        style={styles.mapBackground} 
      />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Icon name="map-marker" size={20} color="black" style={styles.icon} />
          <Text style={styles.headerText}>Exchange Point near you</Text>
        </View>
      </View>

      {/* Central Marker */}
      <View style={styles.centralMarker}>
        <Icon name="map-marker" size={40} color="green" />
      </View>

      {/* Bottom Dustbin Info */}
      <View style={styles.infoCard}>
        <View style={styles.newTag}>
          <Text style={styles.newTagText}>New</Text>
        </View>
        <Text style={styles.dustbinName}>SRM Public Exchange Point</Text>
        <View style={styles.status}>
          <Text style={styles.statusText}>Open</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.statusText}>24*7</Text>
        </View>
        <View style={styles.address}>
          <Icon name="map-marker" size={14} color="gray" />
          <Text style={styles.addressText}>123 Bundelkhand University, Jhansi, UP 284128</Text>
        </View>
        <Image source ={require('../Images/home1.png')}
style ={{
width:200,
height :100,
resizeMode : 'contain',
position:'static',
top:20,
bottom:0,
}}
/>

      </View>

{/* Bottom Dustbin Info */}
<View style={styles.infoCard}>
        <View style={styles.newTag}>
          <Text style={styles.newTagText}>New</Text>
        </View>
        <Text style={styles.dustbinName}>SRM Public Exchange Point</Text>
        <View style={styles.status}>
          <Text style={styles.statusText}>Open</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.statusText}>24*7</Text>
        </View>
        <View style={styles.address}>
          <Icon name="map-marker" size={14} color="gray" />
          <Text style={styles.addressText}>123 Bundelkhand University, Jhansi, UP 284128</Text>
        </View>
        <Image source ={require('../Images/home1.png')}
style ={{
width:200,
height :100,
resizeMode : 'contain',
position:'static',
top:20,
bottom:0,
}}
/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#F3F4F6',
  },
  mapBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 16,
  },
  centralMarker: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
  },
  infoCard: {
    position: 'absolute',
    bottom: '5%',
    left: 0,
    width: '100%',
    height: '30%',
    backgroundColor: '#d1cdcd',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  newTag: {
    backgroundColor: 'green',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  newTagText: {
    color: 'white',
    fontSize: 12,
  },
  dustbinName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'black',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'green',
    marginBottom: 5,
  },
  statusText: {
    color: 'green',
    marginRight: 5,
  },
  dot: {
    color: 'green',
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    color: 'black',
    marginLeft: 5,
  },
  
});

export default ExchangePoint;