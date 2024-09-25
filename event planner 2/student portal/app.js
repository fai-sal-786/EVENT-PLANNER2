
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB_Mf8dUWoAViA7LsS86wS9jv8WnlE9iPI",
    authDomain: "complete-project-bc854.firebaseapp.com",
    projectId: "complete-project-bc854",
    storageBucket: "complete-project-bc854.appspot.com",
    messagingSenderId: "708274302267",
    appId: "1:708274302267:web:20b883fec1d266ef2d9b1e",
    measurementId: "G-5VSB1RE7XP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
