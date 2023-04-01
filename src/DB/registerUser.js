import { addDoc, collection, getDocs, query, queryEqual, where } from 'firebase/firestore'
import { db } from './config'
import emailjs from '@emailjs/browser'


const register = async (first_name, last_name, email, password) => {
    const usersRef = await collection(db, "users")
    const verificationCodesRef = await collection(db, 'verification_codes')

    const q = await query(usersRef, where('email', '==', email))
    const querySnapshot = await getDocs(q)
    if (querySnapshot.empty) {
        const currentUser = await addDoc(usersRef, {
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
            email_verified: false,
            username: '',
            info: ''
        })
        await addDoc(verificationCodesRef, {
            user_id: currentUser.id
        }).then(verification => {
            emailjs.send('service_amkssjq', 'template_py0217r', {
                message: `https://coureroo.web.app/auth/verify-email/${verification.id}`,
                user: email
            }, 'y5DJWWU-uEfeGlLNV')
        })

        return await {
            error: false,
            message: '',
            data: {
                user_id: currentUser.id
            }
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