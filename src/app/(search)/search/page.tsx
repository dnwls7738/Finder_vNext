import styles from "../../../styles/main.module.css";
import SearchCont from "../../../components/searchCont";

export const API_URL = "http://211.210.79.63:5592/search";

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function MainCont() {
  const movie = await getMovies();

  return (
    <>
      <main className={styles.main}>
        <div className={styles.titlea}>
          내 주변 PURAXEL
          <br />
          <span>에스테틱 샵</span>
          <br />
          지금 찾아보세요
        </div>
        <SearchCont movie={movie} />
      </main>
    </>
  );
}
