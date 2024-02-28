import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = app.auth();

export async function upload(file, currentUser) {
  let photoURL = "";
  try {
    const fileRef = ref(storage, currentUser.uid + ".png");

    await uploadBytes(fileRef, file);
    photoURL = await getDownloadURL(fileRef);

    await currentUser.updateProfile({ photoURL });

    await addOrUpdateUser(currentUser.uid, currentUser.displayName, photoURL);

    alert("Uploaded file!");
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
  return photoURL;
}

export const addOrUpdateUser = async (userId, name, photoURL) => {
  try {
    await db.collection("users").doc(userId).set(
      {
        displayName: name,
        photoURL: photoURL,
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

export default app;
