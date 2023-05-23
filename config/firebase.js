// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import getAuth from 'firebase/auth';
import getFirestore from 'firebase/firestore';
import Constants from 'expo-constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    messagingSenderId: Constants.manifest.extra.messagingSenderId,
    appId: Constants.manifest.extra.appId,
    databaseURL: Constants.manifest.extra.databaseURL,
    measurementId: Constants.manifest.extra.measurementId
//   apiKey: "AIzaSyA7SnsGJaih6xSMMd5nqN0e8xEiGOHCF5o",
//   authDomain: "itaride-4248b.firebaseapp.com",
//   projectId: "itaride-4248b",
//   storageBucket: "itaride-4248b.appspot.com",
//   messagingSenderId: "949332318195",
//   appId: "1:949332318195:web:2e1d0b02896b856335e486",
//   measurementId: "G-WPXQ6WP8DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const database = getFirestore();
const analytics = getAnalytics(app);