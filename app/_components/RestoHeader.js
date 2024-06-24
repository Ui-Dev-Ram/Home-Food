import React from 'react'
import Image from 'next/image'
import Logo from '/public/logo.png'
import Link from 'next/link'

const RestoHeader = () => {
  return (
    <div className="flex justify-between mx-8 items-center">
      <Image src={Logo} alt="logo" width={150} height={150} />
      <ul className="flex gap-x-10 items-center">
        <li>
            <Link href="#">Home</Link>
        </li>
        <li>
            <Link href="#">Login/SignUp</Link>
        </li>
        <li>
            <Link href="#">Profile</Link>
        </li>
      </ul>
    </div>
  )
}

export default RestoHeader;