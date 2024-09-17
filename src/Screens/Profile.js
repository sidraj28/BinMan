import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Picture and Info */}
        <View style={styles.profileContainer}>
          <Image 
            source={{ uri: 'https://placehold.co/100x100' }} 
            style={styles.profileImage} 
          />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Siddhant Raj</Text>
            <Text style={styles.profileRole}>User</Text>
            <Text style={styles.profileLocation}>Jhansi</Text>
          </View>
          <Icon name="edit" size={24} color="#4CAF50" />
        </View>

        {/* Profile Bio */}
        <Text style={styles.bio}>
          I conserve waste and promote a sustainable future by turning discarded materials into valuable resources. My mission is to reduce environmental impact and create a greener tomorrow.
        </Text>

        {/* My Posts Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Posts</Text>
            <View style={styles.addPostContainer}>
              <Text style={styles.addPostText}>Add new post</Text>
              <Icon name="plus" size={16} color="#4CAF50" />
            </View>
          </View>
          <View style={styles.postsContainer}>
            {Array(6).fill().map((_, i) => (
              <Image 
                key={i} 
                source={{ uri: 'https://placehold.co/100x100' }} 
                style={styles.postImage} 
              />
            ))}
          </View>
        </View>

        {/* Email Notification Toggle */}
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Email notification</Text>
          <Switch 
            value={emailNotifications} 
            onValueChange={setEmailNotifications} 
            trackColor={{ false: '#ccc', true: '#4CAF50' }} 
            thumbColor={emailNotifications ? '#fff' : '#fff'}
          />
        </View>

        {/* Logout */}
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Logout</Text>
          <Icon name="sync-alt" size={20} color="#4CAF50" />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
     
    </View>
  );
};

const renderBottomNavItem = (iconName, label) => (
  <View style={styles.navItem} key={label}>
    <Icon name={iconName} size={20} color="#fff" />
    <Text style={styles.navText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingBottom: 80, // Space for bottom navigation
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileTextContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileRole: {
    color: '#666',
  },
  profileLocation: {
    color: '#666',
  },
  bio: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    fontSize: 16,
    color: '#333',
  },
  section: {
    marginHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addPostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addPostText: {
    color: '#4CAF50',
    marginRight: 5,
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postImage: {
    width: '30%',
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  toggleText: {
    fontSize: 16,
    color: '#333',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Profile;