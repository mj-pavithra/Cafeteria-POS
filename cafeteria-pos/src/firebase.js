
import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getAnalytics} from "firebase/analytics";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAcV3KPiyATzlFktCP2juGHOVpXb9Iqhk0",
    authDomain: "cafeteria-system-69849.firebaseapp.com",
    databaseURL: "https://cafeteria-system-69849-default-rtdb.firebaseio.com",
    projectId: "cafeteria-system-69849",
    storageBucket: "cafeteria-system-69849.appspot.com",
    messagingSenderId: "773420237749",
    appId: "1:773420237749:web:0ae0597f196fc2d8b18ffc",
    measurementId: "G-EK2KW61MPP"
};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

const analytics = getAnalytics(app);
export const auth = getAuth(app);

