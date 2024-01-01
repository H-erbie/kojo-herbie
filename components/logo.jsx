import React from 'react'
import darkLogo from '@/public/logoDark.png'
import lightLogo from '@/public/logoLight.png'
import Image from 'next/image'
  

const Logo = () => {
  return (
<a href="#" className='hover:opacity-50 z-20 top-5 left-4 fixed transition-all'>
  <Image src={darkLogo} alt='profile' width={48} height={70} className="absolute dark:rotate-90 w-full  dark:scale-0 transition-all -rotate-0 scale-100"/>  
   <Image src={lightLogo} alt='profile' width={100} height={100} className="dark:rotate-0 w-full  dark:scale-100 transition-all rotate-90 scale-0"/>
  </a>  )
}

export default Logo