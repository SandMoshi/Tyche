// VENDOR imports
import Image, { StaticImageData } from 'next/image';

// imports
import exampleIcon from 'public/static/images/person-fill-svgrepo-com.svg';
import linkedInLogo from './images/linkedin-svgrepo-com.svg';
import facebookLogo from './images/facebook-logo-svgrepo-com.svg';
import hyperlinkLogo from './images/link-chain-hyperlink-svgrepo-com.svg';
import { socialMediaLinks, exampleImages} from '../../constants';
import { getRandomImage } from '../utils';

// style imports
import styles from "./blogPost.module.css";

type Props = {
  heroImage?: StaticImageData | null,
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
                <Image src={exampleIcon} width={40} height={40} alt={props.heroImageAlt}/>
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
            {socialMediaLinks.linkedInUrl && <a href={socialMediaLinks.linkedInUrl}><Image src={linkedInLogo} alt="LinkedIn Link" title="LinkedIn" width={20} height={20} /></a>}
            {socialMediaLinks.facebookUrl && <a href={socialMediaLinks.facebookUrl}><Image src={facebookLogo} alt="Facebook Link" width={20} height={20} title="Facebook"  /></a>}
            <a href="#">
              <Image src={hyperlinkLogo} alt="Copy Web Link" title="Copy Link to Clipboard" width={20} height={20} onClick={
                () => navigator.clipboard.writeText(window.location.href)
              }/>
            </a>
          </div>
        </div>
        <h1 className={styles.postTitle}>{props.title}</h1>
        <h3 className={styles.postTagline}>
          {props.tagline}
        </h3>
        {props.heroImage !== null &&
            <div className={styles.heroImageContainer} >
                <Image className={styles.heroImage} src={props.heroImage || getRandomImage(exampleImages)} alt={props.heroImageAlt || 'article image'} />
            </div>
        }
        <article className={styles.article}>
          {props.content && props.content.split(/\n            \n            |\n\n/).map((paragraph, index) => <p key={`paragarph${index}`}>{paragraph}</p>)}
        </article>
      </div>
    </>
  );
}

export default BlogPost;
