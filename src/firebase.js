import firebase from "firebase";


const firebaseConfig = {
	apiKey: "AIzaSyAIuEkVOBUgUadee-7PHwQIbaYjHAyeEso",
	authDomain: "react-clone-32c0d.firebaseapp.com",
	databaseURL: "https://react-clone-32c0d.firebaseio.com",
	projectId: "react-clone-32c0d",
	storageBucket: "react-clone-32c0d.appspot.com",
	messagingSenderId: "766769218757",
	appId: "1:766769218757:web:17d6702c6d4c42f4fb9cac",
	measurementId: "G-8Q04GTJPB5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

