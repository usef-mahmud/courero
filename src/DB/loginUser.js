import { addDoc, collection, getDocs, query, queryEqual, where } from 'firebase/firestore'
import { db } from './config'

const login = async (email, password) => {
    const usersRef = await collection(db, "users")

    const q = await query(usersRef, where('email', '==', email))
    const querySnapshot = await getDocs(q)
    if(querySnapshot.empty){
        return await {
            error: true,
            message: 'there is not user with this email',
            data: {}
        }
    }else{
        const user = querySnapshot.docs[0]
        if(user.data().password === password){
            return await {
                error: false,
                message: '',
                data: {}
            }
        }else{
            return await {
                error: true,
                message: 'password is not correct',
                data: {
                    user_id: user.id
                }
            }
        }
    }


}

export default login