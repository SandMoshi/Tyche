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
import tada from "../data/images/svg/partypopper-svgrepo-com.svg";
import { navLinks } from "../constants";

// type imports
import type { NextPage } from "next";

// style imports
import styles from "../styles/Home.module.css";

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
        <div className={styles.postingsContainer}>
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
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Homepage;
