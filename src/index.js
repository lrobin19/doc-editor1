import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyB5UqPMo5asmEqD7dOtfcg2Z_eCIcNc8kk",
    authDomain: "react-document-editor.firebaseapp.com",
    databaseURL: "https://react-document-editor.firebaseio.com",
    projectId: "react-document-editor",
    storageBucket: "react-document-editor.appspot.com",
    messagingSenderId: "844316348871",
    appId: "1:844316348871:web:d384cbd33fa8fd588109e2",
    measurementId: "G-BHMWE1PJWE"
});

ReactDOM.render(<App />, document.getElementById('editor-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
