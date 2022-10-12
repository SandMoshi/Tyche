
// imports
import Head from "next/head";
import BlogOnly from './blogOnly';


// type imports
import type { NextPage } from 'next';

// style imports
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
    return(
        <div className={styles.container}>
        <Head>
            <title>CSM Hired</title>
            <meta name="description" content="Customer Success (CSM) Job Board" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <BlogOnly />
        </div>
    
    )
}

export default Index;