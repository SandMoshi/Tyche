// style imports
import styles from './searchBar.module.css';

function SearchBar(){
    return <div id='component-searchbar' className={styles.searchbar}>
        <span id='search-bar-icon' className={styles.icon}>🔍</span>
        <form className={styles.form}>
            <input 
                type="text"
                id="search-bar-input"
                placeholder="Customer Success Manager"
                name="searchinput"
                className={styles.input}
            />
        </form>
    </div>
}

export default SearchBar