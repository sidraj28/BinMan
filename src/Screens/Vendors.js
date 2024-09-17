import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Vendors = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source ={require('../Images/bin.jpg')}
          style={styles.headerImage}
        />

        <View style={styles.overlay}>
          <Text style={styles.headerText}>What Do You Want Us To Collect Today?</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#777" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your Vendor here"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonActive}>
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInactive}>
          <Text style={styles.buttonTextInactive}>Liked</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInactive}>
          <Text style={styles.buttonTextInactive}>Best Choice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInactive}>
          <Text style={styles.buttonTextInactive}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInactive}>
          <Text style={styles.buttonTextInactive}>3+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.vendorList}>
        {renderVendor("Mannmohan", 4.1, 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-yGAc0PYDKC0Rd7UbCuBHOcTU.png')}
        {renderVendor("Raju Natwarlal", 4.0, 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-8fOcQe8BF2yxOCQPAELM9LZU.png')}
        {renderVendor("Krantial", 4.3, 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-HyW1uuSOXMo8rbOgq6JfYP5i.png')}
        {renderVendor("Malkhan", 4.2, 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-6WqBynrpmR8v5gLQdCiAmGzR.png')}
        {renderVendor("Ramlal", 4.1, 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-WEToTrsPNdOIquCmFaAqjmbj.png')}
      </ScrollView>

      
    </View>
  );
};

const renderVendor = (name, rating, imageUri) => (
  <View style={styles.vendorCard} key={name}>
    <Image source={{ uri: imageUri }} style={styles.vendorImage} />
    <View style={styles.vendorDetails}>
      <Text style={styles.vendorName}>{name}</Text>
      <View style={styles.vendorRating}>
        <Icon name="star" size={16} color="#FFD700" />
        <Text style={styles.vendorRatingText}>{rating}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.bookNowButton}>
      <Text style={styles.bookNowText}>BOOK NOW</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.addButton}>
      <Icon name="plus" size={16} color="#777" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  imageContainer: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 10,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  buttonActive: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  buttonInactive: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
  },
  buttonTextInactive: {
    color: '#333',
  },
  vendorList: {
    flex: 1,
  },
  vendorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  vendorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  vendorDetails: {
    flex: 1,
    marginLeft: 10,
  },
  vendorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vendorRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vendorRatingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#777',
  },
  bookNowButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  bookNowText: {
    color: '#fff',
  },
  addButton: {
    padding: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#333',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default Vendors;