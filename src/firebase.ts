import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyAs4m6pOBGfwj7sx6x63F2AsvaqFEFCNfI",
    authDomain: "mobile-invitation-7ceb9.firebaseapp.com",
    databaseURL: "https://mobile-invitation-7ceb9-default-rtdb.firebaseio.com",
    projectId: "mobile-invitation-7ceb9",
    storageBucket: "mobile-invitation-7ceb9.firebasestorage.app",
    messagingSenderId: "40522096369",
    appId: "1:40522096369:web:1d2b3690a2c0179cabd350",
    measurementId: "G-L6FC3SQG8Q"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
