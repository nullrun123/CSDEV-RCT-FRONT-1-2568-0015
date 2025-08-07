import styles from '@/app/styles/Header.module.css';
import pine from '@/public/pineapple_full.svg';
import Image from 'next/image';
export default function Header(){
    return(
        <>
        <header>
      <nav className={`section ${styles.navbar}`}>
        <h1 className={styles.logo}>
          <Image src={pine} alt="Pineapple Logo" className={styles.logoimg}/>
          Pineapple 
        </h1>
      </nav>
    </header>
        </>
    )
}