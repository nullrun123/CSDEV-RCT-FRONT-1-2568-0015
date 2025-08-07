
"use client";

import React, { useEffect } from 'react'
import Styles from "@/app/styles/loading.module.css";
import { motion } from "motion/react"
export default function aniLoading(){
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      
      delayChildren:1,
      staggerChildren: 0.5,
    }
  }
}
const item = {
  hidden: { opacity: 1, y: 0 },
  show: (index) => ({
    opacity: 0,
    y: -1000,
    transition: {
      delay: 1 + index *0.4,
      duration: 1,
    },
  }),
};
 useEffect(() => {
  const myStyle = document.querySelector('.column');
   if (myStyle) {
    setTimeout(() => {
      myStyle.style.zIndex = "-1";
    }, 1000);
  } else {
    console.warn("Element with class .column not found");
  }
  }, []);

  return (
    <>
    <motion.ul className={Styles.column}
    variants={container}
    initial="hidden"
    animate="show"
    >
    {[1,2,3,4,5].map((_, index) => (
      <motion.li className={Styles.list} key={index} custom={index} variants={item} />
    ))}
    

  </motion.ul>
  </>
   
  )
}



