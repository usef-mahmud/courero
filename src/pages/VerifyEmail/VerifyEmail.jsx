import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import verifyEmail from '../../DB/verifyEmail'

const VerifyEmail = () => {
    const {id} = useParams()
    const [isVerified, setIsVerified] = useState()

    useEffect(() => {
        const verify = async () => {
            let res = await verifyEmail(id)
            await setIsVerified(!res.error)
        }

        verify()
    }, [])
  return (
    <div className='verify-page' style={{textAlign: 'center'}}>
        {
            isVerified === true &&
            <h2>You account has been verified</h2> 
        }

        {
            isVerified === false &&
            <h2>An unknown error has been happened, pleas try again later</h2>
        }
    </div>
  )
}

export default VerifyEmail