// VENDOR imports
import Image, { StaticImageData } from "next/image";

// imports
import mountainImage from "../../../example/images/pexels-photo-572897.jpeg";

// style imporst
import styles from "./blogRowItem.module.css";

type Props = {
  image?: StaticImageData;
  imageAltText?: string;
  title: string;
  description?: string;
  date?: string;
  readTime?: string;
  blankImage?: boolean;
  postId: string;
};

const BlogRowItem = (props: Props) => {
  return (
    <div className={styles.container}>
      <a href={`/${props.postId}`}>
        <div className={styles.imageContainer}>
          {props.blankImage ? (
            <div style={{ background: "#d3c4cf", height: "256px" }}></div>
          ) : (
            <Image
              src={props.image || mountainImage}
              height="256"
              alt={props.imageAltText || "blog post image header"}
            />
          )}
        </div>
        <h2 className={styles.firstLine}>{props.title}</h2>
        <p className={styles.secondLine}>{props.description || ""}</p>
        <p className={styles.thirdLine}>
          <span>{props.date}</span>
          <span>{props.readTime} read</span>
        </p>
      </a>
    </div>
  );
};

export { BlogRowItem };
