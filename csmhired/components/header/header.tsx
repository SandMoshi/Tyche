// VENDOR imports
import Image from "next/image";

// imports
import tada from "../../data/images/svg/partypopper-svgrepo-com.svg";

// style imports
import styles from "./header.module.scss";

// type imports
import type { ReactNode } from "react";

const Header = (props: {
  includeTitle?: boolean;
  includeSubtitle?: boolean;
  isBlogPage?: boolean;
  includeBackground?: boolean;
  children?: ReactNode;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div className={styles.container}>
      {props.includeBackground && (
        <div className={styles.mainBackground}>
          <div className={styles.wave}></div>
          <div className={styles.tada}>
            <Image src={tada} alt="tada!" height="300" width="300" />
          </div>
        </div>
      )}
      {(props.includeTitle || props.title) && (
        <>
          <div className={styles.titleContainer}>
            {/* Custom Title */}
            {props.title && (
              <h2 className={styles.customTitle}>{props.title}</h2>
            )}
            {/* Homepage Title */}
            {props.includeTitle && !props.title && (
              <h1
                className={styles.title}
                style={(!props.includeSubtitle && { marginTop: "2rem" }) || {}}
              >
                <span>CSM</span>hired
              </h1>
            )}
            {props.isBlogPage && <h1 className={styles.miniBold}>BLOG</h1>}
          </div>
        </>
      )}
      {props.includeSubtitle ? (
        <h2 className={styles.tagline}>Helping CSMs find their dream job</h2>
      ) : (
        <div className={styles.extraPadding} />
      )}
      {/* Custom Render */}
      {props.children && typeof props.children != "string" && props.children}
    </div>
  );
};

export default Header;
