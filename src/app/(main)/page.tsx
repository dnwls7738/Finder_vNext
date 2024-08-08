import React from "react";
import { area } from "../../json/atom";
import { useAtomValue } from "jotai";
import styles from "../../styles/main.module.css";
import Link from "next/link";

function page() {
  return (
    <main className={styles.main}>
      <div className={styles.titlea}>
        내 주변 PURAXEL
        <br />
        <span>에스테틱 샵</span>
        <br />
        지금 찾아보세요
      </div>
      <div>
        <ul className={styles.listb}>
          <Link href={`/search`}>
            <li>
              <span>내 지역 PURAXEL 샵 찾기</span>
            </li>
          </Link>
        </ul>
      </div>
    </main>
  );
}

export default page;
