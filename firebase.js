import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
	authDomain: 'react-register-b9751.firebaseapp.com',
	projectId: 'react-register-b9751',
	storageBucket: 'react-register-b9751.appspot.com',
	messagingSenderId: '165972235049',
	appId: '1:165972235049:web:7a46c52ae7bd944f74dd38',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
