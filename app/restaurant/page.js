"use client"

import React, {useState} from 'react'
import RestoLogin from '../_components/RestoLogin'
import RestoSignUp from '../_components/RestoSignUp'
import Link from 'next/link'
import RestoHeader from '../_components/RestoHeader'
import Footer from '../_components/Footer'

const Page = () => {
  const [signIn, setSignIn] = useState(true)

  return (
    <>
    <div className="flex flex-col h-screen justify-between">
      <RestoHeader />
      <div className="flex flex-col items-center justify-center">
        {
          signIn? <RestoLogin /> : <RestoSignUp />
        }
        
        
        
        
        <Link className="mt-5" href="#" onClick={()=>setSignIn(!signIn)}>
          {signIn? "Do not have account? SignUp" : "Already Account? Login" } 
        </Link>
      </div>
      <Footer className="h-10" />
    </div>
    
    </>
    
  )
}

export default Page;