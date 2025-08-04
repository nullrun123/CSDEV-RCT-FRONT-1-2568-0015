"use client";

import styles from "@/app/styles/DetailBlog.module.css";
import { useContext } from "react";
import pine from "@/public/pineapple.svg";
import Image from "next/image";
import { contextPop } from "@/app/page";
export default function DetailBlog(props) {
  const { selectedItem, item } = props;
  const { IsopenBlog, setIsOpenBlog } = useContext(contextPop);
  return (
    <div key={item.id} className={styles.Overlay}>
      <div className={styles.Modal}>
    
        <span className={styles.btnclose} onClick={() => setIsOpenBlog(false)}>
          X
        </span>
        <div className={styles.detailmodal}>
          <h1 className={styles.titlemodal}>{item.title}</h1>
          <p className={styles.datetitle}>{item.date}</p>

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
