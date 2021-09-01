import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const response = await auth.signInWithPopup(googleProvider);
        console.log(response.user);
        const user = response.user;
        console.log(`User ID - ${user.uid}`);
        const querySnapshot = await db
            .collection("users")
            .where("uid", "==", user.uid)
            .get();
        if (querySnapshot.docs.length === 0) {
            // Creating a New User
            await db.collection("users").add({
                uid: user.uid,
                enrolledClassrooms: [],
            });
        }
    } 
    catch (err) {
        alert(err.message);
    }
};

const logout = () => {
    auth.signOut();
};

export { app, auth, db, signInWithGoogle, logout };