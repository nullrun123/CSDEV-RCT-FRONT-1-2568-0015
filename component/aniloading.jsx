
"use client";

import React, { useEffect } from 'react'
import Styles from "@/app/styles/loading.module.css";
import { motion } from "motion/react"
export default function aniLoading(){
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  }
}
const item = {
  hidden: { opacity: 1, y: 0 },
  show: (index) => ({
    opacity: 0,
    y: -2000,
    transition: {
      // delay แต่ล่ะ item 
      delay: 1 + index * 0.2,
      duration: 1,
    },
  }),
};

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



