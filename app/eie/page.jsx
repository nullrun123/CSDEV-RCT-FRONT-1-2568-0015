import Image from 'next/image'
import React from 'react'
import pine from "@/public/pineapple_full.svg";
import styles from "@/app/styles/MyBlogs.module.css";
const eiei = () => {
  return (
    <div className='section'>
        
        <Image className={styles.pineiei}src={pine} width={1000} height={1000} alt="pineapple"></Image>
    </div>
  )
}

export default eiei
