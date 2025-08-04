
import { useContext, useState } from "react";
import Styles from  '@/app/styles/MyBlogs.module.css';
import Blogs from "@/component/Blogs";

export default function MyBlogs(props) {
  const {data1,setData1 ,setSelectedItem} = props;
  const [ show, setShow ] = useState(true);
  return (
    <div className={`section ${Styles.details}`}>
      <div className={Styles.headDetail}>
        <h1>Blogs</h1>
        <span onClick={() => setShow(!show)} className={Styles.btnview} >View all</span>
      </div>
      
      <ul className={Styles.myul}>
        {show && Array.isArray(data1.data) && data1.data.map((item,index)=>(
          <Blogs key={item.id} item={item} title={item.title} thumbnail={item.thumbnail} setSelectedItem={setSelectedItem}/>
                
            ))}
      </ul>
    </div>

  );
}
