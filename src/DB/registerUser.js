import { addDoc, collection, getDocs, query, queryEqual, where } from 'firebase/firestore'
import { db } from './config'

const register = async (first_name, last_name, email, password) => {
    const usersRef = await collection(db, "users")

    const q = await query(usersRef, where('email', '==', email))
    const querySnapshot = await getDocs(q)
    if (querySnapshot.empty) {
        await addDoc(usersRef, {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            bio: '',
            birth_date: '',
            deleted: false,
            created_date: new Date(),
            public_profile: false,
            location: [0, 0],
            activated: false
        })

        return await {
            error: false,
            message: '',
            data: {}
        }
    } else {
        return await {
            error: true,
            message: 'there is already user with this email',
            data: {}
        }
    }


}

export default register


/*
const signup = async () => {
    const res = await register('yousef', 'mahmoud', 'usef@outlok.com', 'pass')

    if(res.error == true){
      console.log(res.message)
    }else{
      console.log('succeed')
    }
  }
*/