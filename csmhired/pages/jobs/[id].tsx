// VENDOR type imports
import { GetStaticProps, GetStaticPaths } from "next";

// imports
import Header from "../../components/header/header";
import NavBar from "../../components/navbar/navbar";
import { jobPostsData } from "../../public/jobPosts";
import { navLinks } from "../../constants";

// type imports
import type { jobData } from "../../public/jobPosts";

// style imports
import styles from "./jobPost.module.scss";

type Props = {
  id: string;
  jobData: jobData;
};

// These two functions get called at build time and generate possible paths
export const getStaticProps: GetStaticProps = (context) => {
  const id =
    context.params && context.params.id ? context.params.id.toString() : "";
  const jobData = jobPostsData[id];

  return {
    props: { postId: context.params?.id, jobData },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Create paths for each job post
  const paths = Object.keys(jobPostsData).map((jobID) => ({
    params: { id: jobID },
  }));

  // Only pre-render these paths at build, all other routes should 404
  return { paths, fallback: false };
};

const JobPostPage = (props: Props) => {
  let currency = "";

  switch (props.jobData.currency) {
    case "USD":
      currency = "$";
      break;
    case "CAD":
      currency = "CAD $";
      break;
    case "GBP":
      currency = "&#163;";
    default:
      currency = "$";
  }

  return (
    <div className={styles.jobPostBody}>
      <NavBar links={navLinks} />
      <Header includeTitle />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>{props.jobData.title}</h1>
          <h2>{props.jobData.company}</h2>
        </div>
        <h3>Key Details</h3>
        <div className={styles.detailsRow}>
          <span className={styles.salary}>
            {currency}
            {props.jobData.salary.replace(new RegExp(/000$/), "k")}
          </span>
          <span className={styles.remote}>{props.jobData.remote}</span>
          <span className={styles.location}>{props.jobData.location}</span>
        </div>
        <span className={styles.subheading}></span>
        <h3>Job Description</h3>
        <p className={styles.description}>{props.jobData.description}</p>
        <h2 className={styles.applyBtn}>Apply Now</h2>
      </div>
    </div>
  );
};

export default JobPostPage;
