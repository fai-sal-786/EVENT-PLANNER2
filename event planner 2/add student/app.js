// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// apiKey: "AIzaSyC_oEyTT-VIaanZHrYOwNrI6HmftU_tITA",
//     authDomain: "repeatbatch-f0b0f.firebaseapp.com",
//     projectId: "repeatbatch-f0b0f",
//     storageBucket: "repeatbatch-f0b0f.appspot.com",
//     messagingSenderId: "824694453111",
//     appId: "1:824694453111:web:7d7d956ff297ed5cb6e772",
//     measurementId: "G-MV3PSFNCGQ"};

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
const auth = getAuth();
const db = getFirestore();

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const StudentId = document.getElementById("StudentId");
const CNICNO = document.getElementById("CNICNO");
const email = document.getElementById("email");

window.saveStudent = () => {
  let obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    StudentId: StudentId.value,
    CNICNO: CNICNO.value,
    email: email.value,
  };

  console.log(obj);

  const reference = collection(db, "EMPLOYEE");
  addDoc(reference, obj)
    .then(() => {
      console.log("Saved Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};