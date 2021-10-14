import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-mNTpcAHo74x3r-Cj03utxzLPbGqC2dQ",
    authDomain: "todo-list-vue-8e248.firebaseapp.com",
    projectId: "todo-list-vue-8e248",
    storageBucket: "todo-list-vue-8e248.appspot.com",
    messagingSenderId: "141372956854",
    appId: "1:141372956854:web:5c2cf5814a412680798617"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}