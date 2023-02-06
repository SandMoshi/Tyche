// VENDOR type imports
import { GetStaticProps, GetStaticPaths } from "next";

// imports
import Header from "../../components/header/header";
import NavBar from "../../components/navbar/navbar";
import { jobPostsData } from "../../public/jobPosts";
import { navLinks } from "../../constants";

// type imports
import type { jobData } from '../../public/jobPosts';

// style imports
import styles from "./jobPost.module.scss";

type Props = {
    id: string,
    jobData: jobData
}

// These two functions get called at build time and generate possible paths
export const getStaticProps: GetStaticProps = (context) => {
    const id = context.params && context.params.id ? context.params.id.toString() : "";
    const jobData = jobPostsData[id]

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

    return(
        <div className={styles.blogPostBody}>
            <NavBar links={navLinks} />
            <Header includeTitle />
            <h2>{props.jobData.title}</h2>
        </div>
    )

}

export default JobPostPage;

