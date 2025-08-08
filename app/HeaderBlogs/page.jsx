'use client'

import pine from "@/public/pineapple.svg";
import Image from "next/image";
import MyBlogs from "../MyBlogs/page";
import Styles from '@/app/styles/HeaderBlog.module.css';
import { useRouter } from 'next/navigation'
export default function HeaderBlog(props) {
  const {data1,setData1,setSelectedItem} = props;
  const router = useRouter()
  return (
    <>
    {/* ${Styles.section} */}
      <div className={`section ${Styles.bgblog}`}>
        <div className={Styles.centerblog}>
          <div className={Styles.title}>
            <h1>Pineapple_</h1>
            <h2>Considered Space for Design Discourse.</h2>
            <p>
              A little corner of the internet for exploring the juicy parts of
              web design and UX. Want in on the fun? Join the newsletter!
            </p>
          </div>
          <div className={Styles.btnimg}>
            <div className={Styles.btnbox}>
              <button className={Styles.btnjoin} onClick={()=> router.push('/eie')}>Join the Mailing List</button>
            </div>
            <Image src={pine} alt="pinee" />
          </div>
        </div>
      </div>
      <MyBlogs data1={data1} setData1={setData1} setSelectedItem={setSelectedItem} />
    
    </>
  );
}
