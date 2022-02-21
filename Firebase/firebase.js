

// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 // apiKey: "AIzaSyCudEO_7P6Tpu3QUV4H5IN5EQivaHWiByI",
  apiKey: "AIzaSyDNTiXJZEdhZdk8YBSaAAGdj8zY01kVLvk",
  authDomain: "projet5-68b8a.firebaseapp.com",
  projectId: "projet5-68b8a",
  storageBucket: "projet5-68b8a.appspot.com",
  messagingSenderId: "856507169264",
  appId: "1:856507169264:web:b969c3a274653fefef0535"
};

// Initialize Firebase

let app;

if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig)
}
else {
  app = app.firebase()
}

const auth = firebase.auth()
const db = firebase.firestore()
const Firebase = {
   product: () => {
    return db.collection('product')
  },
  user: () =>{
    return db.collection('user')
  }
}

export {auth, db, Firebase}

// const app = initializeApp(firebaseConfig);