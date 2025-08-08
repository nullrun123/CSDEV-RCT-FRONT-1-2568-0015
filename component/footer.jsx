import style from '@/app/styles/footer.module.css';
import Image from 'next/image';
import pine from '@/public/pineapple_full.svg';
const footerPage = () => {
  return (

    <footer className={`section ${style.container}`}>
        <div className={style.pineapple}>
            <Image className={style.imgPine} src={pine} alt='Pineapple'/>
            <p>Pineapple</p>
        </div>
        <p className={style.copyright}>Ⓒ Copyright 2025 CSDEV KMITL. All rights reserved.</p>
    </footer>

  )
}
export default footerPage