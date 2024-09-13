import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for icons

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleShare = () => {
    // Implement your share functionality here
    console.log('Share button pressed');
  };

  const handleEdit = () => {
    // Implement your edit functionality here
    console.log('Edit button pressed');
  };

  const handleDelete = () => {
    // Implement your delete functionality here
    console.log('Delete button pressed');
  };

  const handleMore = () => {
    // Implement your more functionality here
    console.log('More button pressed');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <View style={styles.pageContainer}>
            <View style={styles.topBar}>
              <Icon name="chevron-back-outline" size={24} color="black" onPress={() => handlePageChange(12)} />
              <Text style={styles.pageIndicator}>11/42</Text>
              <Icon name="heart-outline" size={24} color="black" />
              <Icon name="information-circle-outline" size={24} color="black" />
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.locationContainer}>
                <Icon name="location-outline" size={16} color="green" />
                <Text style={styles.locationText}>Jhansi, India</Text>
                <Icon name="chevron-down-outline" size={16} color="black" />
              </View>
              <Image source={require('../Images/instagram.jpg')} style={styles.backgroundImage} />
              <Text style={styles.title}>Keep your City Clean & Green</Text>
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search your nearby"
                  onChangeText={handleSearch}
                  value={searchQuery}
                />
                <Icon name="search-outline" size={24} color="black" />
              </View>
              <View style={styles.servicesContainer}>
                <TouchableOpacity style={styles.serviceButton}>
                  <Icon name="person-outline" size={24} color="white" />
                  <Text style={styles.serviceButtonText}>Toilets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceButton}>
                  <Icon name="trash-outline" size={24} color="white" />
                  <Text style={styles.serviceButtonText}>Dustbins</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceButton}>
                  <Icon name="refresh-circle-outline" size={24} color="white" />
                  <Text style={styles.serviceButtonText}>Exchange Point</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.servicesContainer}>
                <TouchableOpacity style={styles.serviceButton}>
                  <Icon name="fast-food-outline" size={24} color="white" />
                  <Text style={styles.serviceButtonText}>Food Waste</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceButton}>
                  <Icon name="storefront-outline" size={24} color="white" />
                  <Text style={styles.serviceButtonText}>Vendors</Text>
                </TouchableOpacity>
              </View>
            
            </View>
          </View>
        );
      case 12:
        return (
          <View style={styles.pageContainer}>
            <View style={styles.topBar}>
              <Icon name="chevron-back-outline" size={24} color="black" onPress={() => handlePageChange(11)} />
              <Text style={styles.pageIndicator}>12/42</Text>
              <Icon name="heart-outline" size={24} color="black" />
              <Icon name="information-circle-outline" size={24} color="black" />
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search your nearby"
                  onChangeText={handleSearch}
                  value={searchQuery}
                />
                <Icon name="search-outline" size={24} color="black" />
              </View>
              <View style={styles.servicesContainer}>
                <TouchableOpacity style={styles.serviceButton}>
                  <Icon name="person-outline" size={24} color="white" />
                  <Text style={styles.serviceButtonText}>Toilets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceButton}>
                  <Icon name="trash-outline" size={24} color="white" />
                  <Text style={styles.serviceButtonText}>Dustbins</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceButton}>
                  <Icon name="refresh-circle-outline" size={24} color="white" />
                  <Text style={styles.serviceButtonText}>Exchange Point</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.servicesContainer}>
                <TouchableOpacity style={styles.serviceButton}>
                  <Icon name="fast-food-outline" size={24} color="white" />
                  <Text style={styles.serviceButtonText}>Food Waste</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceButton}>
                  <Icon name="storefront-outline" size={24} color="white" />
                  <Text style={styles.serviceButtonText}>Vendors</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      case 13:
        return (
          <View style={styles.pageContainer}>
            <View style={styles.topBar}>
              <Icon name="chevron-back-outline" size={24} color="black" onPress={() => handlePageChange(12)} />
              <Text style={styles.pageIndicator}>13/42</Text>
              <Icon name="heart-outline" size={24} color="black" />
              <Icon name="information-circle-outline" size={24} color="black" />
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Services</Text>
              <Text style={styles.text}>Nearest toilets, waste exchange points, dustbins.</Text>
              <Text style={styles.text}>Provide waste to the people who are using it to make it</Text>
            </View>
          </View>
        );
     
      default:
        return null;
    }
  };

  return (
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  pageContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pageIndicator: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    marginLeft: 5,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  serviceButton: {
    backgroundColor: '#00b050',
    padding: 15,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  serviceButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  bottomButton: {
    backgroundColor: '#00b050',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  bottomButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navigationButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  navigationButtonText: {
    fontSize: 12,
    color: '#333333',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default App;