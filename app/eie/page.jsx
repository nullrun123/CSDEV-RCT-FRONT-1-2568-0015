import Image from 'next/image'
import React from 'react'
import pine from "@/public/pineapple_full.svg";
const eiei = () => {
  return (
    <div className='section'>
        
        <Image src={pine} width={1000} height={1000} alt="pineapple"></Image>
    </div>
  )
}

export default eiei
