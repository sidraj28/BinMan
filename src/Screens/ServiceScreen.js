import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ServiceScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Header with Location and Bell Icon */}
      <View style={styles.header}>
        <View style={styles.location}>
          <Icon name="map-marker" size={20} color="#4CAF50" />
          <Text style={styles.locationText}>Jhansi, India</Text>
        </View>
        <Icon name="bell" size={20} color="#4CAF50" />
      </View>

      {/* Image Banner */}
      <View style={styles.banner}>
        <Image
          source={require('../Images/S1.png')}
          style={styles.bannerImage}
        />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerText}>Keep your City Clean & Green</Text>
        </View>
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={18} color="#777" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your nearby"
        />
      </View>

      <View style={styles.iconGrid}>
  <TouchableOpacity onPress={() => navigation.navigate('Toilets')}>
    <Image source={require('../Images/Toilets.jpeg')} style={styles.iconCircle} />
    <Text style={styles.iconText}>Toilets</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Dustbins')}>
    <Image source={require('../Images/Dustbins.jpeg')} style={styles.iconCircle} />
    <Text style={styles.iconText}>Dustbins</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('ExchangePoint')}>
    <Image source={require('../Images/Ep.jpeg')} style={styles.iconCircle} />
    <Text style={styles.iconText}>Exchange</Text>
    <Text style={styles.icon}>Point</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('FoodWaste')}>
    <Image source={require('../Images/Fw.jpeg')} style={styles.iconCircle} />
    <Text style={styles.iconText}>Food </Text>
    <Text style={styles.icon}>Waste </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Vendors')}>
    <Image source={require('../Images/Vendors.jpeg')} style={styles.iconCircle} />
    <Text style={styles.iconText}>Vendors</Text>
  </TouchableOpacity>
</View>

      {/* Arrow Icon */}
      <View style={styles.arrowDown}>
        <Icon name="chevron-down" size={24} color="#777" />
      </View>
    </ScrollView>
  );
};

const renderGridItem = (iconName, label, screenName) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.gridItem} key={label} onPress={() => navigation.navigate(screenName)}>
      <View style={styles.iconCircle}>
        <Icon name={iconName} size={24} color="#fff" />
      </View>
      <Text style={styles.gridLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  banner: {
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  gridItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconCircle: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 60,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    padding:0,
    marginRight:5,
  },
 iconText: {
  
    marginTop: 8,
    fontSize: 13,
    color: '#333',
    paddingLeft:5,
    paddingRight:5,
    marginRight:0,
  },
  icon: {
  
    marginTop: 0,
    fontSize: 13,
    color: '#333',
    paddingLeft:5,
    paddingRight:5,
    marginRight:2,
  },
  
  gridLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
  arrowDown: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default ServiceScreen;