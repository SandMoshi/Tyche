// VENDOR imports
import Image from "next/image";

// imports
import NavBar from "../components/navbar/navbar";
import Header from "../components/header/header";
import SearchBar from "../components/searchBar/searchBar";
import RowItem from "../components/rowItem/rowItem";
import QuickFiltersRow from "../components/quickFiltersRow/quickFiltersRow";
import icon1 from "public/static/images/logo-svgrepo-com.svg";
import icon2 from "public/static/images/logo-svgrepo-com (1).svg";
import icon3 from "public/static/images/logo-svgrepo-com (2).svg";
import csmHiredIcon  from "public/static/images/corporate/logo_on_top_white_transparent.png"
import { navLinks } from "../constants";

// type imports
import type { NextPage } from "next";

// style imports
import styles from "../styles/homepage.module.css";

const Homepage: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <NavBar links={navLinks} />
        <Header includeTitle includeSubtitle/>
        <div className={styles.searchBarContainer}>
          <SearchBar />
        </div>
        <div className={styles.quickFiltersRow}>
          <QuickFiltersRow />
        </div>
        <div className={styles.wave}></div>
        <div className={styles.postingsContainer}>
          <h3>Available Jobs:</h3>
          <div className={styles.jobPosts}>
            <RowItem
              title="Company A"
              description="Better perks, Better pay. Company A."
              icon={icon1}
            />
            <RowItem
              title="Company B"
              description="My perks better, my training better, my pay better. Everything better!"
              icon={icon2}
            />
            <RowItem
              title="Company C"
              description="My perks better, my training better, my pay better. Everything better!"
              icon={icon3}
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
        >
          <Image src={csmHiredIcon} alt="csmHired logo" width={80} height={80} objectFit={'contain'}/>
        </a>
        <p className={styles.copyright}>Copyright © 2023 CSMhired. All rights reserved.</p>
        <p className={styles.smallDisclaimer}>
          All content on this website is protected by copyright laws and may not be reproduced, distributed, transmitted, displayed, published, or broadcast without the prior written permission of csmhired.com. The information on this website is for general informational purposes only and is subject to change without notice. CSMhired makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. By using CSMhired and csmhired.com, you agree to these terms as well as the "Terms of Service" and any future modifications.

        </p>
      </footer>
    </>
  );
};

export default Homepage;
