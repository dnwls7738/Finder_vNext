import React from "react";
import logImage from "../styles/img/brand_logo.png";
import styles from "../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";

function header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className="logo">
          <Image src={logImage} alt="logo" />
        </Link>

        <div className={styles.login}>
          <a href="https://puraxel.co.kr/dh/shop_index.html" target="_blank">
            공식몰 바로가기
          </a>
        </div>
      </nav>
    </header>
  );
}

export default header;
