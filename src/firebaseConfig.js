import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
    apiKey: process.env.VUE_APP_FIREBASE_CONFIG_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_CONFIG_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_CONFIG_DATABASE_URL,
    storageBucket: process.env.VUE_APP_FIREBASE_CONFIG_STORAGE_URL,
    projectId: process.env.VUE_APP_FIREBASE_CONFIG_PROJECT_ID
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export {
    db,
    storage,
    auth
}

