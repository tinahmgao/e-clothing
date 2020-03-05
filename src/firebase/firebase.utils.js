import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDOCIEvpT23biziBowzz67PTlpsyZuClTU',
  authDomain: 'e-clothing-5e576.firebaseapp.com',
  databaseURL: 'https://e-clothing-5e576.firebaseio.com',
  projectId: 'e-clothing-5e576',
  storageBucket: 'e-clothing-5e576.appspot.com',
  messagingSenderId: '712915522034',
  appId: '1:712915522034:web:6a8c4d0de9f5e0e1e09b6b'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
