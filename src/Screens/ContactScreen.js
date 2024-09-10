import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const ContactScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* This is a placeholder for the image */}
        <Text style={styles.imagePlaceholder}>[Your Image Here]</Text>
      </View>

      <Text style={styles.header}>Get in touch</Text>

      <View style={styles.contactContainer}>
        {/* Phone Number */}
        <View style={styles.contactRow}>
          <Icon name="phone" type="font-awesome" color="green" />
          <Text style={styles.contactText} onPress={() => Linking.openURL('tel:8303109832')}>
            8303109832
          </Text>
        </View>

        {/* Email */}
        <View style={styles.contactRow}>
          <Icon name="envelope" type="font-awesome" color="black" />
          <Text style={styles.contactText} onPress={() => Linking.openURL('mailto:binman2023@gmail.com')}>
            binman2023@gmail.com
          </Text>
        </View>

        {/* Instagram */}
        <View style={styles.contactRow}>
          <Icon name="instagram" type="font-awesome" color="purple" />
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://www.instagram.com/binman.in')}>
            @binman.in
          </Text>
        </View>

        {/* WhatsApp */}
        <View style={styles.contactRow}>
          <Icon name="whatsapp" type="font-awesome" color="green" />
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://wa.me/8303109832')}>
            8303109832
          </Text>
        </View>

        {/* LinkedIn */}
        <View style={styles.contactRow}>
          <Icon name="linkedin" type="font-awesome" color="blue" />
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://linkedin.com/in/binmanlinked.in')}>
            binmanlinked.in
          </Text>
        </View>
      </View>

      {/* Chatbot Button */}
      <Button
        title="ChatBot"
        icon={{
          name: 'arrow-right',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        buttonStyle={styles.chatbotButton}
        onPress={() => navigation.navigate('ChatBotScreen')} // Assuming you have a ChatBot screen
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  imageContainer: {
    height: 200,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    fontSize: 18,
    color: '#7f7f7f',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  contactContainer: {
    paddingHorizontal: 20,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  contactText: {
    fontSize: 16,
    marginLeft: 10,
    textDecorationLine: 'underline',
    color: '#007BFF',
  },
  chatbotButton: {
    backgroundColor: 'black',
    marginHorizontal: 50,
    marginVertical: 20,
    paddingVertical: 10,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default ContactScreen;