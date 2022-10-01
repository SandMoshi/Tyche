// imports
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/navbar/navbar";
import SearchBar from "../components/searchBar/searchBar";
import RowItem from "../components/rowItem/rowItem";
import QuickFiltersRow from "../components/quickFiltersRow/quickFiltersRow";
import icon1 from "../example/images/logo-svgrepo-com.svg";
import icon2 from "../example/images/logo-svgrepo-com (1).svg";
import icon3 from "../example/images/logo-svgrepo-com (2).svg";
import tada from "../data/images/svg/partypopper-svgrepo-com.svg";
import { navLinks } from "../data/constants";

// type imports
import type { NextPage } from "next";

// style imports
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSM Hired</title>
        <meta name="description" content="Customer Success (CSM) Job Board" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar links={navLinks} />
        <div className={styles.mainBackground}>
          <div className={styles.wave}></div>
          <div className={styles.tada}>
            <Image src={tada} alt="tada!" height="450" width="450" />
          </div>
        </div>
        <h1 className={styles.title}>
          <span>CSM</span>hired
        </h1>
        <h2 className={styles.tagline}>Helping CSMs find their dream job</h2>
        {/* <h2 style={{fontStyle: 'italic'}}>Find your next customer success job here.</h2> */}

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
    </div>
  );
};

export default Home;
