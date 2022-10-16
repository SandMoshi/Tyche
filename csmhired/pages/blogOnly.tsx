// VENDOR imports
import Image from "next/image";

// imports
import NavBar from "../components/navbar/navbar";
import { navLinks } from "../data/constants";
import tada from "../data/images/svg/partypopper-svgrepo-com.svg";

// type imports
import type { NextPage } from "next";

// style imports
import styles from "../styles/blogOnly.module.css";

const BlogOnly: NextPage = () => {
  return (
    <>
      <div className={styles.mainBackground}>
        <div className={styles.wave}></div>
        <div className={styles.tada}>
          <Image src={tada} alt="tada!" height="300" width="300" />
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span>CSM</span>hired
        </h1>
        <h1 className={styles.miniBold}>BLOG</h1>
      </div>
      <h2 className={styles.tagline}>Helping CSMs find their dream job</h2>
    </>
  );
};

export default BlogOnly;
