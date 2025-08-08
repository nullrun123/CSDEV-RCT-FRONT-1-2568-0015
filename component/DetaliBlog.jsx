"use client";

import styles from "@/app/styles/DetailBlog.module.css";
import { useContext } from "react";
import pine from "@/public/pineapple.svg";
import Image from "next/image";
import { contextPop } from "@/app/page";
const d = new Date('2024-07-14T00:00:00.000Z');
const date = d.toUTCString();
console.log(date);
export default function DetailBlog(props) {
  const { selectedItem, item } = props;
  const {setIsOpenBlog } = useContext(contextPop);
  const date = new Date(item.date);
  const options = { day: "numeric",month: "long", year: "numeric" };
  const datenew = date.toLocaleDateString("en-US",options);
  return (
    <div key={item.id} className={styles.Overlay}>
      <div className={styles.Modal}>
    
        <span className={styles.btnclose} onClick={() => setIsOpenBlog(false)}>
          X
        </span>
        <div className={styles.detailmodal}>
          <h1 className={styles.titlemodal}>{item.title}</h1>
          <p className={styles.datetitle}>{datenew}</p>
          <div className={styles.categorybox}>
              {/* ดึง Array category */}
            {Array.isArray(item.category) &&
              item.category.map((items, index) => (
                <p key={index} className={styles.category}>
                  {items}
                </p>
              ))}            
          </div>
          <p className={styles.description}>{item.description}</p>
          
        </div>
      </div>
    </div>
  );
}


