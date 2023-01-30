// VENDOR imports
import Link from "next/link";

// style imports
import styles from "./navbar.module.css";

type Props = {
  links: Array<{
    href: string;
    text: string;
    disabled?: boolean;
  }>;
};

function NavBar(props: Props) {
  return (
    <nav className={styles.navbar}>
      {props.links.map((link) => (
        !link.disabled && <Link href={link.href} key={link.href}>
          <a className={styles.navlink}>{link.text}</a>
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
