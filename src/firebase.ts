import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: 'AIzaSyCEVaDPSV9s3JIr3j0Bxv-FRI8oflIF-jI',
    authDomain: 'audrey-cb952.firebaseapp.com',
    databaseURL: 'https://audrey-cb952.firebaseio.com',
    projectId: 'audrey-cb952',
    storageBucket: 'audrey-cb952.appspot.com',
    messagingSenderId: '609295626870',
    appId: '1:609295626870:web:ffa6d60f79b9914e256557',
    measurementId: 'G-T2V99DHFTQ',
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

// const db = getFirestore();
// const functions = getFunctions(app);
// const auth = getAuth(app);
// const storage = getStorage(app);

// if (process.env.NODE_ENV === 'development') {
//     connectFunctionsEmulator(functions, 'localhost', 5001);
//     connectFirestoreEmulator(db, 'localhost', 8081);
//     connectAuthEmulator(auth, 'http://localhost:9099');
//     connectStorageEmulator(storage, 'localhost', 9199);
// }
