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
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



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

const tableBody = document.getElementById("tableBody");

const studentData = [];

const renderTable = () => {
  tableBody.innerHTML = "";
  studentData.forEach((x) => {
    tableBody.innerHTML += `
        <tr>
        <td>${x.firstName}</td>
        <td>${x.lastName}</td>
        <td>${x.CNICNO}</td>
        <td>${x.email}</td>
        <td>${x.StudentId}</td>        
        </tr>
        `;
  });
};

const getData = async () => {
  const reference = collection(db, "EMPLOYEE");
  const dt = await getDocs(reference);

  dt.forEach((doc) => {
    studentData.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  console.log(studentData);
  renderTable();
};
getData();
