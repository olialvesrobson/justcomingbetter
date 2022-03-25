import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCCgtW3iZVjxuuGCTU8tQrqn-t0HyV5P_A",
    authDomain: "justcomingbetter.firebaseapp.com",
    databaseURL: "https://justcomingbetter.firebaseio.com",
    projectId: "justcomingbetter",
    storageBucket: "",
    messagingSenderId: "23513257544",
    appId: "1:23513257544:web:3a217d5f0f4198adc7ea7d"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;