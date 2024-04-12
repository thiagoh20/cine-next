import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import dotenv from 'dotenv'

dotenv.config()

const firebaseConfig = {
    apikey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appID: process.env.ADD_ID
}

const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage (firebaseApp)