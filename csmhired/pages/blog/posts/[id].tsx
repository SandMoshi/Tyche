// imports
import Header from "../../../components/header/index";
import NavBar from "../../../components/navbar/navbar";
import exampleImage from "public/static/images/seascape-g20cb2aa3d_1920.jpg";
import BlogPost from "../../../components/blogPost/blogPost";
import blogPostsJSON from "../../../public/blogposts.json";
import { getRandomImage } from "../../../components/utils";
import { exampleImages, authorImages } from "../../../constants";

// type imports
import { GetStaticProps, GetStaticPaths } from "next";

// style imports
import styles from "./posts.module.css";

type PostData = {
  postId: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  links: {
    medium: string;
  };
  description: string;
  content: string;
};

type Props = {
  postId: string;
  blogPost: PostData;
};

const PostPage = (props: Props) => {
  return (
    <div>
      <Header includeTitle includeSubtitle />
      <>
        <NavBar links={[{ href: "/", text: "Home" }]} />
        <BlogPost
          heroImage={getRandomImage(exampleImages)}
          heroImageAlt="example photo"
          title={props.blogPost.title}
          tagline={props.blogPost.description}
          authorName={props.blogPost.author}
          authorIcon={authorImages[props.blogPost.author]}
          readTime={`${props.blogPost.readTime} mins`}
          date={props.blogPost.date}
          content={props.blogPost.content}
        />
      </>
      );
    </div>
  );
};

// These two functions get called at build time and generate possible paths
export const getStaticProps: GetStaticProps = (context) => {
  const blogPost = blogPostsJSON.posts.filter(
    (post) => post.postId == context.params?.id
  )[0];

  return {
    props: { postId: context.params?.id, blogPost },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Create paths for each blog post
  const paths = blogPostsJSON.posts.map((post, index) => ({
    params: { id: post.postId },
  }));

  // Only pre-render these paths at build, all other routes should 404
  return { paths, fallback: false };
};

export default PostPage;
