"use client";
import { motion, AnimatePresence } from "framer-motion";
import A from "../components/A";
import styles from "../styles/main.module.css";

export default function searchList({ movie, id }) {
  return (
    <div className={styles.search}>
      <AnimatePresence>
        <motion.ul
          className={styles.result}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 11 }}
          transition={{ duration: 0.5 }}
        >
          {id
            ? id.map((movie) => <A {...movie} key={movie.tel} />)
            : movie.map((movie) => <A {...movie} key={movie.tel} />)}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
