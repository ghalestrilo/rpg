import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC89W8je6sX9j5jQg4uWtWlEo9cR_epo1A",
  authDomain: "rpg-manager-database.firebaseapp.com",
  databaseURL: "https://rpg-manager-database.firebaseio.com/",
  projectId: "rpg-manager-database",
  storageBucket: "igor-dev-apps.appspot.com",
  messagingSenderId: "463098371234"
};

firebase.initializeApp(config);

export const database = firebase.database();

