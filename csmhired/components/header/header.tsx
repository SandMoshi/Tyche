// VENDOR imports
import Image from "next/image";

// imports
import tada from "../../data/images/svg/partypopper-svgrepo-com.svg";

// style imports
import styles from "./header.module.css";

const Header = (props: {
  includeTitle?: boolean;
  includeSubtitle?: boolean;
  isBlogPage?: boolean,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainBackground}>
        <div className={styles.wave}></div>
        <div className={styles.tada}>
          <Image src={tada} alt="tada!" height="300" width="300" />
        </div>
      </div>
      {props.includeTitle && (
        <>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              <span>CSM</span>hired
            </h1>
            {props.isBlogPage && <h1 className={styles.miniBold}>BLOG</h1>}
          </div>
        </>
      )}
      {props.includeSubtitle && (
        <h2 className={styles.tagline}>Helping CSMs find their dream job</h2>
      )}
    </div>
  );
};

export default Header;
