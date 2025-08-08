
'use client';

import { useState, createContext, useContext, useEffect } from "react";
import Styles from "@/app/page.module.css";
import Header from "./Header/page";
import HeaderBlog from "./HeaderBlogs/page";
import DetailBlog from "@/component/DetaliBlog";
// import { contextPop } from "@/context/contextPop";

const contextPop = createContext();
const Home = () => {


  const [selectedItem, setSelectedItem] = useState(null);
  const [IsopenBlog, setIsOpenBlog] = useState(false);
  const [data1, setData1] = useState([]);


  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.add(Styles.modalopen);
    setTimeout(() => {
      document.documentElement.classList.remove(Styles.modalopen);
      
    }, 3000);

    async function getData() {

      try {
        
        const res = await fetch('./api');
        const data = await res.json();
        setData1(data);
      } catch (err) {
        console.log(err);
      }

    }
    getData();

  }, []);



  return (

    <contextPop.Provider value={{ IsopenBlog, setIsOpenBlog }}>
      <div className={Styles.sectioncontent}>
        {IsopenBlog && selectedItem && <DetailBlog item={selectedItem} />}

      </div>
      <HeaderBlog
        data1={data1}
        setData1={setData1}
        setSelectedItem={setSelectedItem}
      />


    </contextPop.Provider>
  );
};
export { contextPop };
export default Home;

