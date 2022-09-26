// imports
import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '../components/searchBar/searchBar'
import RowItem from '../components/rowItem/rowItem'
import QuickFiltersRow from '../components/quickFiltersRow/quickFiltersRow'
import icon1 from '../example/images/logo-svgrepo-com.svg';
import icon2 from '../example/images/logo-svgrepo-com (1).svg';
import icon3 from '../example/images/logo-svgrepo-com (2).svg';

// type imports
import type { NextPage } from 'next'

// style imports
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSM Hired</title>
        <meta name="description" content="Customer Success (CSM) Job Board" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <strong>CSM</strong>hired
        </h1>
        <h3 style={{fontStyle: 'italic'}}>Helping CSMs find their dream job</h3>
        <h2>Find your next customer success job here.</h2>

        <div className={styles.searchBar}>
          <SearchBar/>
        </div>
        <div className={styles.quickFiltersRow} >
          <QuickFiltersRow />
        </div>
        <RowItem 
          title="Company A"
          description="Better perks, Better pay. Company A."
          icon={icon1}
        />
        <RowItem 
          title="Company B"
          description="My perks better, my training better, my pay better. Everything better!"
          icon={icon2}
        />
        <RowItem 
          title="Company C"
          description="My perks better, my training better, my pay better. Everything better!"
          icon={icon3}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
