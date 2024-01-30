import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBimfr2q5HQfvK0ulKpO3rMiNrtEMzY1Fc",
  authDomain: "testing-liv-honors.firebaseapp.com",
  projectId: "testing-liv-honors",
  storageBucket: "testing-liv-honors.appspot.com",
  messagingSenderId: "387878893710",
  appId: "1:387878893710:web:d58af474acd86e35ebf1df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);