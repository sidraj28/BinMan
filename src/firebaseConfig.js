// firebaseConfig.js
import { firebase } from '@react-native-firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyCDpPk3RAfFZNg-3zDWF5ueZpGl5YVlq_0",
  authDomain: "binman-7ef64.firebaseapp.com",
  projectId:  "binman-7ef64",
  storageBucket: "binman-7ef64.appspot.com",
  messagingSenderId:  "911264536406",
  appId: "1:911264536406:android:6744275269170ec530a8f7",
}


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };