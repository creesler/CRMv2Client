import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web apps Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVMGNDakelsazYWKpHcIwkPMBwSceRr0k",
    authDomain: "crmdatabase-5ddf5.firebaseapp.com",
    projectId: "crmdatabase-5ddf5",
    storageBucket: "crmdatabase-5ddf5.appspot.com",
    messagingSenderId: "249356271034",
    appId: "1:249356271034:web:0f4dabe15f4b0a7f21b183",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();