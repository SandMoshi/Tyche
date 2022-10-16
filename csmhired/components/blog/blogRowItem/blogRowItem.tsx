// VENDOR imports
import Image from "next/image";

// style imporst
import styles from "./blogRowItem.module.css";

type Props = {
  image?: string;
  imageAltText?: string;
  title: string;
  description?: string;
  date?: string,
  readTime?: string,
};

const BlogRowItem = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.image && (
        <div className={styles.imageContainer}>
          <Image
            src={props.image}
            height="256"
            alt={props.imageAltText || "blog post image header"}
          />
        </div>
      )}
      <h2 className={styles.firstLine}>{props.title}</h2>
      <p className={styles.secondLine}>{props.description || ""}</p>
      <p className={styles.thirdLine}><span>{props.date}</span><span>{props.readTime}</span></p>
    </div>
  );
};

export { BlogRowItem };
