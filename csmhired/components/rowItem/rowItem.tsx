// vendor imports
import Image from 'next/image';

// style imports
import styles from './rowItem.module.css';


type Props = {
    icon?: string,
    title: string,
    description: string,
    iconAlt?: string,
    width?: number,
    height?: number,
} 

function RowItem(props: Props){

    const icon = props.icon ? 
        <div className='iconContainer'>
            <Image 
                src={props.icon}
                alt={props.iconAlt || "Icon"}
                width={props.width || 70}
                height={props.height || 70}
            />
        </div> : null;

    return <div className={styles.rowItem}>
        <div className={styles.iconContainer}>
            {icon}
        </div>
        <div>
            <span className={styles.title}>{props.title}</span>
            <p className={styles.description}>{props.description}</p>
        </div>
    </div>
}

export default RowItem