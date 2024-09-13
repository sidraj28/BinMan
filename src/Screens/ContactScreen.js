import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView ,Image} from 'react-native';
import { Icon, Button } from 'react-native-elements';

const ContactScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* This is a placeholder for the image */}
        <Text style={styles.imagePlaceholder}>[Your Image Here]</Text>
      </View>
      <View style={styles.contact}>

      <Text style={styles.header}>Get in touch</Text>
       </View>
       <View style={styles.ccontainer}>
         <View style={styles.iconContainer}>
          <Image 
          source={require('../Images/telephone.png')} // Replace with your phone icon path
          style={styles.icon}
          />
       </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>PHONE NO.</Text>
        <Text style={styles.contactText}>8303109832</Text>
      </View>
      </View>
      <View style={styles.ccontainer}>
      <View style={styles.iconContainer}>
        <Image 
          source={require('../Images/mail.png')} // Replace with your phone icon path
          style={styles.icon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>MAIL</Text>
          <Text style={styles.contactText} onPress={() => Linking.openURL('mailto:binman2023@gmail.com')}>
            binman2023@gmail.com
          </Text>
        </View>
        </View>

        <View style={styles.ccontainer}>
        <View style={styles.iconContainer}>
        <Image 
          source={require('../Images/mail.png')} // Replace with your phone icon path
          style={styles.icon}
        />
      </View>

        <View style={styles.textContainer}>
        <Text style={styles.label}>INSTAGRAM</Text>
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://www.instagram.com/binman.in')}>
            @binman.in
          </Text>
        </View>
        </View>

        <View style={styles.ccontainer}>
        <View style={styles.iconContainer}>
        <Image 
          source={require('../Images/instagram.jpg')} // Replace with your phone icon path
          style={styles.icon}
        />
      </View>

        <View style={styles.textContainer}>
        <Text style={styles.label}>WHATSAPP</Text>
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://wa.me/8303109832')}>
            8303109832
          </Text>
        </View>
        </View>

        <View style={styles.ccontainer}>
        <View style={styles.iconContainer}>
        <Image 
          source={require('../Images/whatsapp.jpg')} // Replace with your phone icon path
          style={styles.icon}
        />
      </View>

        <View style={styles.textContainer}>
        <Text style={styles.label}>LINKEDIN</Text>
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://linkedin.com/in/binmanlinked.in')}>
            binmanlinked.in
          </Text>
        </View>
        </View>

           {/* Chatbot Button */}
      <Button
        title="ChatBot"
         
        buttonStyle={styles.chatbotButton}
        onPress={() => navigation.navigate('ChatBotScreen')} // Assuming you have a ChatBot screen
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
    ,
    backgroundColor: '#f2f2f2',
  },
  ccontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d1d5db', // Light grey background
    padding: 10,
    borderRadius: 10,
    margin: 10,
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
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    justifyContent:'center',
    color:'green',
  },
  contact:{
    flex:1,
    width:300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    backgroundColor:'white',
    marginLeft:40,
    marginRight:20,
    position:'relative',
    bottom:20,
    marginBottom:30,

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
    backgroundColor: 'gray',
    marginHorizontal: 50,
    marginVertical: 20,
    paddingVertical: 10,
    borderWidth:3,
    borderColor:'black',
    borderRadius:50,
  },
  iconContainer: {
    
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
    icon: {
      width: 40,
      height: 40,
      tintColor: 'white', // Optional, if you want the icon to have a white tint
    },
    textContainer: {
      marginLeft: 10,
    },
    label: {
      fontWeight: 'bold',
      color: 'black',
    },
    phoneNumber: {
      color: 'black',
      fontSize: 16,
    },
    header:{
      fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    justifyContent:'center',
    color:'green',
    }
});

export default ContactScreen;