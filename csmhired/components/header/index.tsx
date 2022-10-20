// VENDOR imports
import Image from "next/image";

// imports
import tada from "../../data/images/svg/partypopper-svgrepo-com.svg";

// style imports
import styles from './styles.module.css';

const Header= () => {
  return <>
    <div className={styles.mainBackground}>
    <div className={styles.wave}></div>
    <div className={styles.tada}>
      <Image src={tada} alt="tada!" height="300" width="300" />
    </div>
  </div>
  </>
}

export default Header