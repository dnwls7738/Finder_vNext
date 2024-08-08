"use client";
import React from "react";
import SearchList from "../components/searchList";
import { area } from "@/json/atom";
import { useAtomValue } from "jotai";
import { Suspense, use, useState } from "react";
import styles from "../styles/main.module.css";

export default function search({ movie }) {
  const setArea = useAtomValue(area);

  const [search, setSearch] = useState([]);
  const [idValue, setId] = useState();
  const [selected, setSelected] = useState("");

  function saveUserId(e: any) {
    const searchWord = e.target.value;
    const b = movie._puraxelUser.filter((el) => el.title.includes(searchWord));
    setId(b);
    setSearch(searchWord);
  }

  function clickHandler(e: any) {
    const searchWord = e.target.innerText;
    const b = movie._puraxelUser.filter((el) =>
      el.address.includes(searchWord)
    );
    setId(b);
    setSelected(searchWord);
  }

  return (
    <>
      <form>
        <div className={styles.box}>
          <input
            placeholder="상호명 검색"
            type="text"
            value={search}
            onChange={saveUserId}
          />
          <span id="search-icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.7477"
                cy="9.74821"
                r="6.7"
                transform="rotate(-10.5618 10.7477 9.74821)"
                fill="white"
                stroke="#d09589"
                strokeWidth="1.6"
              ></circle>
              <path
                d="M19.3206 18.3016C19.646 18.6005 20.1521 18.579 20.451 18.2536C20.7499 17.9282 20.7284 17.4221 20.403 17.1232L19.3206 18.3016ZM15.6383 14.9193L19.3206 18.3016L20.403 17.1232L16.7206 13.7409L15.6383 14.9193Z"
                fill="#d09589"
              ></path>
            </svg>
          </span>
        </div>
      </form>

      <ul className={styles.lista}>
        {setArea.map((el, index) => (
          <li
            className={el === selected ? `${styles.select}` : `${styles.no}`}
            onClick={clickHandler}
            key={index}
          >
            <span>{el}</span>
          </li>
        ))}
      </ul>

      <SearchList movie={movie._puraxelUser} id={idValue} />
    </>
  );
}
