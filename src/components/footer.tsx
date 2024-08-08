import React from "react";
import logImage from "../styles/img/brand_logo.png";
import youtubeImage from "../styles/img/youtube.svg";
import naverImage from "../styles/img/naver.svg";
import instagramImage from "../styles/img/instagram.svg";
import facebookImage from "../styles/img/facebook.svg";
import Image from "next/image";
import styles from "../styles/footer.module.css";

function footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.links}>
            <div className={styles.logo}>
              <Image src={logImage} alt="logo" />
            </div>
            <div className={styles.wrapper}>
              <div className={styles.items}>협업/제휴문의</div>
              <div className={styles.items}>이용약관</div>
              <div className={styles.items}>개인정보처리방침</div>
            </div>
          </div>
          <div className={styles.sns}>
            <a
              href="https://www.youtube.com/channel/UC7X6D4v-G-b7NmNeU2j-jwQ"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={youtubeImage} alt="youtube" />
            </a>
            <a
              href="https://blog.naver.com/puraxel"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={naverImage} alt="naver" />
            </a>
            <a
              href="https://www.instagram.com/puraxel/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={instagramImage} alt="instagram" />
            </a>
            <a
              href="https://www.facebook.com/Puraxel.official/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={facebookImage} alt="facebook" />
            </a>
          </div>
        </div>
        <div className={styles.docs}>
          주식회사 라메디텍 | 사업자 등록번호 : 119-86-51786 | 통신판매업 신고
          2017-서울금천-0999 <br />
          대표이사: 최종석 | 주소 : 08513 서울특별시 금천구 벚꽃로 234 10층
          1002호 (가산동, 에이스 하이엔드타워6차) <br />
          개인정보보호책임자 : 장창욱 | 팩스: 02-852-7983 | e-mail :
          puraxel@lameditech.com | 고객센터 : 02-852-7982 | 평일 (토,일 공휴일
          휴무) 오전 9시 ~ 오후 6시
        </div>
        <div className={styles.copyright}>
          @copyright Puraxel. all rights reserved
        </div>
      </div>
    </footer>
  );
}

export default footer;
