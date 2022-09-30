// VENDOR imports
import Image, { StaticImageData } from 'next/image';

// imports
import exampleImage from '../../example/images/seascape-g20cb2aa3d_1920.jpg';
import exampleIcon from '../../example/images/person-fill-svgrepo-com.svg';
import linkedInLogo from './images/linkedin-svgrepo-com.svg';
import facebookLogo from './images/facebook-logo-svgrepo-com.svg';
import hyperlinkLogo from './images/link-chain-hyperlink-svgrepo-com.svg';
import { socialMediaLinks } from '../../data/constants';

// style imports
import styles from "./blogPost.module.css";

type Props = {
  heroImage: null | StaticImageData,
  title: string,
  tagline: string,
  content: string,
  authorName: string,
  authorIcon: null | string,
  readTime: string,
  date: string,
  heroImageAlt?: string,
}

function BlogPost(props:Props) {
  return (
    <>
      <div className={styles.blogPostContainer}>
        <div className={styles.articleHeader}>
          <div className={styles.authorImage}>
            {props.authorIcon != null && 
                <Image src={exampleIcon} width={undefined} height={undefined} alt={props.heroImageAlt}/>
            }
          </div>
          <div className={styles.articleInfo}>
            <p className={styles.authorName}>{props.authorName}</p>
            <p className={styles.articleDetails}>
              <span className={styles.date}>Published {props.date}</span>
              <span className={styles.readTime}>{props.readTime} read</span>
            </p>
          </div>
          <div className={styles.sharingLinks}>
            {socialMediaLinks.linkedInUrl && <a href={socialMediaLinks.linkedInUrl}><Image src={linkedInLogo} alt="LinkedIn Link" width={20} height={20} /></a>}
            {socialMediaLinks.facebookUrl && <a href={socialMediaLinks.facebookUrl}><Image src={facebookLogo} alt="Facebook Link" width={20} height={20}  /></a>}
            {/* TODO - programatically copy current url to clipboard */}
            <a href={'/404'}><Image src={hyperlinkLogo} alt="Copy Web Link" width={20} height={20} />Copy Link</a>
          </div>
        </div>
        <h1 className={styles.postTitle}>{props.title}</h1>
        <h3 className={styles.postTagline}>
          {props.tagline}
        </h3>
        {props.heroImage != null &&
            <Image className={styles.heroImage} width={undefined} height={undefined} src={props.heroImage || exampleImage} alt={props.heroImageAlt || 'article image'}/>
        }
        <article className={styles.article}>
          {props.content.split('\\n').map((paragraph, index) => <p key={`paragarph${index}`}>{paragraph}</p>)}
        </article>
      </div>
    </>
  );
}

export default BlogPost;
