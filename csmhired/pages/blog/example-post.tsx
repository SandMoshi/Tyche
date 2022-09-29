// imports
import NavBar from "../../components/navbar/navbar";
import { navLinks } from "../../data/constants";
import styles from "./blog.module.css";

function examplePost() {
  return (
    <>
      <NavBar links={navLinks} />
      <div className={styles.blogPostContainer}>
        <div className={styles.articleHeader}>
          <div className={styles.authorImage}></div>
          <div className={styles.articleInfo}>
            <p className={styles.authorName}>James Webb</p>
            <p className={styles.articleDetails}>
              <span className={styles.date}>2022</span>
              <span className={styles.readTime}>4 min read</span>
            </p>
          </div>
          <div className={styles.sharingLinks}>
            <span>Twit</span>
            <span>FB</span>
          </div>
        </div>
        <h1 className={styles.postTitle}>Example Blog Post</h1>
        <h3 className={styles.postTagline}>
          Look no further than this article.
        </h3>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            felis in ipsum aliquet rutrum. Curabitur vel luctus nibh. Sed
            sollicitudin purus nunc, eu ultricies nisl semper eu. Maecenas sed
            metus justo. Curabitur in nunc eget orci mattis vehicula. Sed dictum
            libero non tempor pulvinar. Aliquam ut ultrices erat, sed pulvinar
            neque. Cras et congue tortor. Vivamus lacinia nunc nec elementum
            interdum. Nulla at mauris lorem. Proin vel congue ipsum. Curabitur
            eleifend pellentesque sapien, eu posuere leo egestas et. Nulla sem
            eros, mollis pharetra dui ac, luctus volutpat enim.
          </p>
          <p>
            Aliquam fringilla dui at venenatis euismod. Maecenas porttitor dolor
            id erat volutpat laoreet. Praesent euismod urna ac massa vulputate,
            quis fermentum eros elementum. Cras porttitor blandit euismod. Nam
            consectetur feugiat fringilla. Aliquam dui massa, posuere sit amet
            lectus et, dictum sagittis nulla. Sed a malesuada ipsum. Vestibulum
            venenatis maximus lorem a gravida. Nulla porttitor placerat metus
            quis malesuada. Integer rutrum eros id dui convallis eleifend. Etiam
            mattis libero sit amet rhoncus ultricies. Nunc tempor fermentum
            auctor. Proin id sem ultricies, lacinia risus non, accumsan mauris.
          </p>
          <p>
            Phasellus vitae sapien libero. Aenean placerat eros eu facilisis
            vestibulum. In vitae porttitor velit. In nec odio non tortor
            malesuada iaculis. Nulla facilisi. Aliquam et congue purus. Sed ut
            ligula sit amet nulla fermentum consectetur sed in lorem. Maecenas
            vehicula ex in pellentesque convallis. Vestibulum at volutpat
            sapien. Nullam eu ultricies dolor. Sed egestas cursus arcu faucibus
            auctor. Praesent in arcu auctor, ornare tortor non, ullamcorper
            augue.
          </p>
          <p>
            Nunc ultrices ipsum in enim consequat elementum. In nisl justo,
            vehicula ac arcu at, blandit faucibus odio. Nulla accumsan nunc
            felis. Nullam venenatis magna quam, sed tristique augue interdum
            quis. In sollicitudin enim et accumsan porttitor. Vestibulum sed
            hendrerit lorem, nec sagittis magna. Aliquam erat volutpat. Nam
            gravida ipsum sit amet sapien luctus, ac commodo lacus venenatis.
            Nulla cursus dolor enim, ultrices pellentesque nunc porta vel. Cras
            tincidunt vehicula nibh sit amet euismod. Nulla odio orci,
            sollicitudin vel pellentesque sed, placerat non est. Mauris risus
            enim, porta quis urna eget, vulputate accumsan lectus. Aliquam vel
            congue lacus.
          </p>
          <p>
            Maecenas odio erat, dapibus vitae magna a, tincidunt porttitor
            metus. Donec venenatis eros lorem, dictum condimentum dolor dapibus
            sed. Nulla malesuada odio sit amet ante sagittis, non bibendum
            lectus interdum. Vestibulum ut ex non ex volutpat tincidunt eu at
            mauris. Aenean imperdiet condimentum dictum. Maecenas posuere
            hendrerit nunc, sit amet pretium sem convallis ac. Suspendisse nec
            tortor ac arcu bibendum vehicula. Ut eu arcu egestas, bibendum lorem
            luctus, convallis nisl. Aliquam posuere gravida justo, at tempus
            quam mollis id. Suspendisse eget laoreet odio, id malesuada ex.
            Aenean convallis aliquam enim nec scelerisque. Phasellus malesuada
            lorem ligula, nec imperdiet nunc luctus eget. Nulla ornare
            vestibulum felis eget aliquet. Nunc id tellus pellentesque, congue
            mauris in, malesuada leo. Sed efficitur purus tortor, ac euismod
            quam rhoncus non. Vivamus vestibulum nisl sit amet nibh blandit
            tempor.
          </p>
        </article>
      </div>
    </>
  );
}

export default examplePost;
