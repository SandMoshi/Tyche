// vendor imports
import Image from 'next/image';
import { useState } from 'react';

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
            <div className={styles.rowItem} onClick={() => setExpanded(prevValue => !prevValue)}>
                <div className={styles.iconContainer}>
                    {icon}
                </div>
                <div className={styles.rightSide}>
                    <span className={styles.title}>{props.title}</span>
                    <p className={styles.description}>{props.description}</p>
                </div>
            </div>
            {isExpanded && <ExpandedContent/>}
        </>
    )
}

export default RowItem