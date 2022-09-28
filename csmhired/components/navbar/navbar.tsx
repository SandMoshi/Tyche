// style imports
import styles from './navbar.module.css';

type Props = {
    links: Array<{
        href: string,
        text: string,
    }>
}

function NavBar(props:Props){
    return(
        <nav className={styles.navbar}>
            {props.links.map( link => 
                <a 
                    className={styles.navlink}
                    key={link.href}
                    href={link.href}
                >{link.text}</a>    
            )}
        </nav>
    )
}

export default NavBar;