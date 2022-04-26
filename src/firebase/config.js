import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpDLdF10q--0jF2Yxh_bO4Rd5u0zHCwME',
  authDomain: 'photo-gallery-react-78134.firebaseapp.com',
  projectId: 'photo-gallery-react-78134',
  storageBucket: 'photo-gallery-react-78134.appspot.com',
  messagingSenderId: '836814164578',
  appId: '1:836814164578:web:863a1a6b8450851865773b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore(app);
const timeStamp = serverTimestamp();

export { projectStorage, projectFirestore, timeStamp };
