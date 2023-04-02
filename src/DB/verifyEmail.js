import { doc, collection, getDocs, updateDoc, query, where, deleteDoc } from 'firebase/firestore'
import { db } from './config'


const verifyEmail = async (verification_id) => {
    const verificationCodesRef = await collection(db, 'verification_codes')

    const q = await query(verificationCodesRef, where('__name__', '==', verification_id))
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
        let user_id = querySnapshot.docs[0].get('user_id')
        await updateDoc(await doc(db, "users", user_id), {
            email_verified: true
        })
        await deleteDoc(doc(db, 'verification_codes', verification_id))

        return await {
            error: false,
            message: 'your email has been verified'
        }
    } else {
        return await {
            error: true,
            message: 'An error has been happen, please try again later',
            data: {}
        }
    }


}

export default verifyEmail
