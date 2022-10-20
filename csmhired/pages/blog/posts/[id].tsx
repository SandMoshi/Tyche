// VENDOR imports
import { useRouter } from "next/router";
import { useEffect } from "react";


// imports
import Header from "../../../components/header/index";
import blogJSON from "../../../public/blogposts.json";

// type imports
import { GetStaticProps, GetStaticPaths  } from 'next';

const BlogPost = (props: {postId: string}) => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      console.log("router.isReady", router.isReady);
      const postId = router.query.id as string;
      console.log("Sand", postId);
    }
  }, [router.isReady, router.query.id]);

  console.log(props)

  return (
    <div>
      <Header />
      <h1>Test</h1>
      <h1>id {props.postId}</h1>
    </div>
  );
};

// These two functions get called at build time and generate possible paths
export const getStaticProps: GetStaticProps = (context) => {
  return { props: { postId: context.params?.id } };
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Create paths for each blog post
  const paths = blogJSON.posts.map((post) => ({
    params: { id: post.postId },
  }));

  // Only pre-render these paths at build, all other routes should 404
  return { paths, fallback: false };
}

export default BlogPost;
