// VENDOR imports

// imports
import NavBar from "../../components/navbar/navbar";
import { navLinks } from "../../constants";
import Header from "../../components/header/header";
import PageFooter from "../../components/pageFooter/pageFooter";

// type imports
import type { NextPage } from "next";

// style imports
import styles from "./styles.module.scss";

const Post: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <NavBar links={navLinks} />
        <Header title="POST YOUR JOBS" />
        <div className={styles.content}>
          <h1>List with us for FREE!</h1>
          <h3>
            No strings attached. List your opening and find candidates for free!
            <br />
            Limited time offer.
          </h3>
          <h2>Simply send us an email to:</h2>
          {/* TODO Create email for this */}
          <h1>[placeholder]@gmail.com</h1>
          <h2>and we will do the rest!</h2>
        </div>
        <PageFooter />
      </div>
    </>
  );
};

export default Post;
