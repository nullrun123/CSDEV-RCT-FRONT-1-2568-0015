
import Image from "next/image";
import styles from '@/app/styles/MyBlogs.module.css';
import { useContext } from "react";
import { contextPop } from "@/app/page";
import Head from "next/head";
import { myFont } from "@/app/fonts/Myfonts";
export default function Blogs(props) {
  const { item ,setSelectedItem} = props;
  const {IsopenBlog,setIsOpenBlog} = useContext(contextPop);
  return (

    <li key={item.id} className={styles.li}>
     
      <div className={styles.imageBlog}>
      <Image className={styles.blogimg} src={item.thumbnail} width={100} height={100} alt={item.title}/>
      </div>
      <div className={styles.detailtext}>
       <p className={`${styles.Blogs} ${myFont.className}`}>GLOG</p>
        <h2>{item.title}</h2>
        <p className={styles.detail}>{item.description}</p>
        <span
          className={styles.btnread}
          onClick={() => {
            setSelectedItem(item);
            setIsOpenBlog(true);
          }}
        >
          Read more
        </span>
      </div>

    </li>
  );
}
