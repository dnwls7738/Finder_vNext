import styles from "../styles/info.module.css";
import { API_URL } from "@/app/(search)/search/page";
import NaverMap from "@/components/navermap";

async function getInfo(tel: string) {
  const response = await fetch(`${API_URL}/${tel}`);
  return response.json();
}

export default async function Info({ tel }: { tel: string }) {
  const movie = await getInfo(tel);

  return (
    <>
      <div className={styles.url}>
        <div className={styles.title}>{movie.user[0].title}</div>
        <a href={movie.user[0].url} target="_blank" rel="noreferrer">
          <p>예약하러 가기</p>
        </a>
      </div>

      <div className={styles.infoCont}>
        <p className={styles.span}>INFO</p>
        <div className={styles.tel}>문의전화 : {movie.user[0].tel}</div>
        <div className={styles.address}>주소 : {movie.user[0].address}</div>
      </div>

      <div>
        <p className={styles.span}>소개</p>
        <div className={styles.info}>{movie.user[0].info}</div>
      </div>

      <NaverMap lat={movie.user[0].lat} lng={movie.user[0].lng} />
    </>
  );
}
