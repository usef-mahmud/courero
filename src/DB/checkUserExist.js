import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './config'


const checkUserExist = async (id) => {
    const usersRef = await collection(db, "users")
    const q = await query(usersRef, where('__name__', '==', id))
    const querySnapshot = await getDocs(q)

    if(querySnapshot.empty){
        return await false
    }else{
        return await true
    }
}

export default checkUserExist