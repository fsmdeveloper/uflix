import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBpOTgsxdWmwGnGHe6n_m_EvWq59gCD8s8",
  authDomain: "fsmweber.firebaseapp.com",
  databaseURL: "https://fsmweber.firebaseio.com",
  projectId: "fsmweber",
  storageBucket: "fsmweber.appspot.com",
  messagingSenderId: "464237384594"
}

firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);


ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();