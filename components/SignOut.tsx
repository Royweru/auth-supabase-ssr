"use client"
import axios from 'axios'
import React from 'react'

const SignOut = () => {
    const onSignOut = async () => {
         await axios.post("/auth/logout",)
         console.log("data sent successfully")
    }
  return (
    <div className=' my-4 w-full flex justify-center'>
       <button 
       onClick={onSignOut}
       className=' rounded-lg p-4 txt-xl font-semibold text-white bg-rose-500'>
          SIGN OUT
       </button>
    </div>
  )
}

export default SignOut