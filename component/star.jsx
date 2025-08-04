import Image from "next/image"
import star from "@/public/star.svg";
import styles from '@/app/page.module.css';
const Star = () => {
  return (
    <div className={styles.star}>
        <Image className={styles.star1} src={star} width={60} height={60} alt="star"/>
        <Image className={styles.star2} src={star} width={60} height={60} alt="star"/>
    </div>
  )
}
export default Star