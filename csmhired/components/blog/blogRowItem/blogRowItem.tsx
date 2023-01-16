// VENDOR imports
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// imports
import mountainImage from "public/static/images/pexels-photo-572897.jpeg";

// style imporst
import styles from "./blogRowItem.module.css";

type Props = {
  image?: StaticImageData
  imageAltText?: string
  title: string
  description?: string
  date?: string
  readTime?: string
  blankImage?: boolean
  postId: string
  author?: string
};

const BlogRowItem = (props: Props) => {
  return (
    <div className={styles.container}>
      <Link href="./blog/posts/[id]" as={`/blog/posts/${props.postId}`}>
      <a>
        <div className={styles.imageContainer}>
          {props.blankImage ? (
            <div style={{ background: "#d3c4cf", height: "256px" }}></div>
          ) : (
            <Image
              src={props.image || mountainImage}
              layout="responsive"
              alt={props.imageAltText || "blog post image header"}
            />
          )}
        </div>
        <h2 className={styles.titleLine}>{props.title}</h2>
        <p className={styles.description}>{props.description || ""}</p>
        {props.author && <p className={styles.authorLine}>
          <span>{props.author}</span>
        </p>}
        <p className={styles.thirdLine}>
          <span>{props.date}</span>
          <span>{props.readTime} mins read</span>
        </p>
      </a>
      </Link>
    </div>
  );
};

export { BlogRowItem };
