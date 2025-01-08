  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAPT_eT305D-CynfmVF8RBWkiv6ynyiiuE",
    authDomain: "portfolio-f59e1.firebaseapp.com",
    projectId: "portfolio-f59e1",
    storageBucket: "portfolio-f59e1.firebasestorage.app",
    messagingSenderId: "308227109320",
    appId: "1:308227109320:web:6216b3383d1743e5f4d0fd",
    measurementId: "G-KBX8HJ8D8R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);