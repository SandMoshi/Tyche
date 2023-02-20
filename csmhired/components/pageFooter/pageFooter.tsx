// VENDOR imports
import Image from "next/image";

// imports
import csmHiredIcon from "public/static/images/corporate/logo_on_top_white_transparent.png";

// style imports
import styles from "./pageFooter.module.scss";

const PageFooter = () => {
  return (
    <footer className={styles.footer}>
      <a href="#">
        <Image
          src={csmHiredIcon}
          alt="csmHired logo"
          width={80}
          height={80}
          objectFit={"contain"}
        />
      </a>
      <p className={styles.copyright}>
        Copyright © 2023 CSMhired. All rights reserved.
      </p>
      <p className={styles.smallDisclaimer}>
        All content on this website is protected by copyright laws and may not
        be reproduced, distributed, transmitted, displayed, published, or
        broadcast without the prior written permission of csmhired.com. The
        information on this website is for general informational purposes only
        and is subject to change without notice. CSMhired makes no
        representations or warranties of any kind, express or implied, about the
        completeness, accuracy, reliability, suitability, or availability with
        respect to the website or the information, products, services, or
        related graphics contained on the website for any purpose. Any reliance
        you place on such information is therefore strictly at your own risk. By
        using CSMhired and csmhired.com, you agree to these terms as well as the
        &quot;Terms of Service&quot; and any future modifications.
      </p>
    </footer>
  );
};

export default PageFooter;
