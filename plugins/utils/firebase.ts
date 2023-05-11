import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvf3vvGVQ8cQS2h8WDS3RiWPS22LRlQPA",
  authDomain: "proyecto-usei.firebaseapp.com",
  projectId: "proyecto-usei",
  storageBucket: "proyecto-usei.appspot.com",
  messagingSenderId: "87360540541",
  appId: "1:87360540541:web:eff7714df2563276338614",
  measurementId: "G-298MTSF50W"
};
export const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(firebaseApp);


