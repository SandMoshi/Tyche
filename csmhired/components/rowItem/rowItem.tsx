// vendor imports
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


// imports
import { ExpandedContent } from './expandedContent/expandedContent';

// style imports
import styles from './rowItem.module.scss';


type Props = {
    icon?: string,
    title: string,
    description: string,
    iconAlt?: string,
    width?: number,
    height?: number,
    jobId: number | string,
} 

function RowItem(props: Props){

    const [isExpanded, setExpanded] = useState<boolean>(false);

    const icon = props.icon ? 
        <div className={styles.icon}>
            <Image 
                src={props.icon}
                alt={props.iconAlt || "Icon"}
                layout='fill'
                objectFit='contain'
            />
        </div> : null;

    return ( 
        <>
            <div className={styles.rowItem} onClick={(e) => (e.target as HTMLAnchorElement).tagName != "A" && setExpanded(prevValue => !prevValue)}>
                <div className={styles.iconContainer}>
                    {icon}
                </div>
                <div className={styles.rightSide}>
                    <Link href={`/jobs/${props.jobId}`} passHref >
                        <a className={styles.title} target="_blank">{props.title}</a>
                    </Link>
                    <p className={styles.description}>{props.description}</p>
                </div>
            </div>
            <ExpandedContent isExpanded={isExpanded}/>
        </>
    )
}

export default RowItem