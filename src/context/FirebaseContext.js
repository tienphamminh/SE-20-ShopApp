import React, {createContext} from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from '../config/firebase';

const FirebaseContext = createContext();

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// const db = firebase.firestore();

const Firebase = {
  // getCurrentUser: () => {
  //   return firebase.auth().currentUser;
  // },

  createUser: async (user) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(
        user.email,
        user.password,
      );

      // const userID = Firebase.getCurrentUser().uid;
      const uid = firebase.auth().currentUser.uid;
      // console.log(uid);
      // console.log(user.username);
      // await db.collection('users').doc(uid).add({
      //   username: user.username,
      //   email: user.email,
      // });

      delete user.password;
      return {...user, uid};
    } catch (error) {
      console.log('Error @createUser: ', error.message);
    }
  },
};

const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>;
};

export {FirebaseContext, FirebaseProvider};
