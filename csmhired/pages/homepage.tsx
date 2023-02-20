// imports
import NavBar from "../components/navbar/navbar";
import Header from "../components/header/header";
import SearchBar from "../components/searchBar/searchBar";
import RowItem from "../components/rowItem/rowItem";
import QuickFiltersRow from "../components/quickFiltersRow/quickFiltersRow";
import icon1 from "public/static/images/logo-svgrepo-com.svg";
import icon2 from "public/static/images/logo-svgrepo-com (1).svg";
import icon3 from "public/static/images/logo-svgrepo-com (2).svg";
import { navLinks } from "../constants";
import PageFooter from "../components/pageFooter/pageFooter";

// type imports
import type { NextPage } from "next";

// style imports
import styles from "../styles/homepage.module.css";

const Homepage: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <NavBar links={navLinks} />
        <Header includeTitle includeSubtitle />
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
              title="Position A | Company A"
              // description={["Better perks, Better pay. Company A."," My perks better, my training better, my pay better. Everything better!"]}
              description={`Better perks, Better pay. Company A. My perks better, my training better, my pay better.\n Everything better! Everything better! Everything better! Everything better! Everything better! Everything better! Everything better! Everything better! Everything better!Everything better!Everything better!Everything better!Everything better!`}
              icon={icon1}
              jobId={"j" + Math.round(Math.random() * 12)}
            />
            <RowItem
              title="Position B | Company B"
              description="My perks better, my training better, my pay better. Everything better!"
              icon={icon2}
              jobId={"j" + Math.round(Math.random() * 12)}
            />
            <RowItem
              title="Position C | Company C"
              description="My perks better, my training better, my pay better. Everything better!"
              icon={icon3}
              jobId={"j" + Math.round(Math.random() * 12)}
            />
          </div>
        </div>
      </main>

      <PageFooter />
    </>
  );
};

export default Homepage;
