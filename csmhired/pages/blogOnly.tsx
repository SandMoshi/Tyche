// VENDOR imports
import Image from "next/image";

// imports
import NavBar from "../components/navbar/navbar";
import { navLinks } from "../data/constants";
import tada from "../data/images/svg/partypopper-svgrepo-com.svg";
import { BlogRowItem } from "../components/blog/blogRowItem/blogRowItem";
import mountainImage from "../example/images/pexels-photo-572897.jpeg";
import fbLogo from "../data/images/svg/facebook-svgrepo-com.svg";
import instagramLogo from "../data/images/svg/instagram-svgrepo-com.svg";
import linkedinLogo from "../data/images/svg/linkedin-svgrepo-com.svg";

// type imports
import type { NextPage } from "next";

// style imports
import styles from "../styles/blogOnly.module.css";

const BlogOnly: NextPage = () => {
  return (
    <div>
      <div className={styles.mainBackground}>
        <div className={styles.wave}></div>
        <div className={styles.tada}>
          <Image src={tada} alt="tada!" height="300" width="300" />
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span>CSM</span>hired
        </h1>
        <h1 className={styles.miniBold}>BLOG</h1>
      </div>
      <h2 className={styles.tagline}>Helping CSMs find their dream job</h2>
      <div className={styles.socialMediaLinks}>
        <a href="https://www.linkedin.com/company/csmhired/">
          <Image src={linkedinLogo} alt="CSM hired LinkedIn page" title="CSM hired social media" />
        </a>
        <a href="https://www.facebook.com/CSMhired">
          <Image src={fbLogo} alt="CSM hired Facebook page" title="CSM hired social media" />
        </a>
        <a href="https://www.instagram.com/csmhired/">
          <Image src={instagramLogo} alt="CSM hired Instagram page" title="CSM hired social media" />
        </a>
      </div>
      <div className={styles.comingSoon}>
        <h1>COMING</h1>
        <h1>SOON!</h1>
        <h1>NOVEMBER 2022</h1>
        <a href="https://www.linkedin.com/company/csmhired/">Click here for more info</a>
      </div>
      {/* <div className={styles.postsContainer}>
        <BlogRowItem
          image={mountainImage}
          title="Example Title - Do something great, be bold."
          description="Donec dolor augue, posuere et congue eget, tincidunt eu eros. Morbi ornare ornare massa sed placerat. Nulla cursus, diam eu euismod varius, massa tortor fermentum felis, vitae consequat orci ex sed ex."
          date="Oct 2022"
          readTime="5 mins"
          postId={"001"}
        />
        <BlogRowItem
          blankImage
          image={mountainImage}
          title="Example Title - Do something great, be bold."
          description="Donec dolor augue, posuere et congue eget, tincidunt eu eros. Morbi ornare ornare massa sed placerat. Nulla cursus, diam eu euismod varius, massa tortor fermentum felis, vitae consequat orci ex sed ex."
          date="Oct 2022"
          readTime="5 mins"
          postId={"002"}
        />
        <BlogRowItem
          title="Example Title - Do something great, be bold."
          description="Donec dolor augue, posuere et congue eget, tincidunt eu eros. Morbi ornare ornare massa sed placerat. Nulla cursus, diam eu euismod varius, massa tortor fermentum felis, vitae consequat orci ex sed ex."
          date="Oct 2022"
          readTime="5 mins"
          postId={"003"}
        />
      </div> */}
      <div className={styles.background}></div>
    </div>
  );
};

export default BlogOnly;
