import styles from "../styles/search.module.css";
import Link from "next/link";

interface Props {
  address: string;
  url: string;
  title: string;
  tel: string;
  lat: string;
  lng: string;
}

export default function A({ address, title, tel, lat, lng }: Props) {
  return (
    <Link className={styles.url} href={`/search/${tel}`}>
      <li>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.address}>{address}</p>
        </div>
        <div className={styles.docs}>
          <p>연락가능시간 : 09:00 ~ 18:00</p>
          <p>연락처 : {tel}</p>
        </div>
      </li>
    </Link>
  );
}
