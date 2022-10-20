// VENDOR imports
import Image from "next/image";
import { useEffect, useState } from "react";

// imports
import Header from "../components/header/index";
import NavBar from "../components/navbar/navbar";
import { navLinks } from "../data/constants";
import { BlogRowItem } from "../components/blog/blogRowItem/blogRowItem";
import mountainImage from "../example/images/pexels-photo-572897.jpeg";
import fbLogo from "../data/images/svg/facebook-svgrepo-com.svg";
import instagramLogo from "../data/images/svg/instagram-svgrepo-com.svg";
import linkedinLogo from "../data/images/svg/linkedin-svgrepo-com.svg";
import dataJSON from "../public/blogposts.json";

// type imports
import type { NextPage } from "next";

// style imports
import styles from "../styles/blogOnly.module.css";

const BlogOnly: NextPage = () => {
  return (
    <div>
      <Header />
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
      <div className={styles.postsContainer}>
        {dataJSON.posts.map( (post, index) => {
          return <BlogRowItem 
                    key={`blogpost-id-${post.postID}-${index}`}
                    title={post.title}
                    date={post.date}
                    readTime={post.readTime}
                    postId={post.postId}
                    author={post.author}
                    description={post.description}
                  />
        })}
      </div>
      <div className={styles.background}></div>
    </div>
  );
};

export default BlogOnly;
