// Vendor imports
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';
import { animated, useSpring } from '@react-spring/web';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// style imports
import styles from './expandedContent.module.scss';
import rowItemStyles from '../rowItem.module.scss';

type Props = {
    isExpanded: boolean,
}

const ExpandedContent = (props: Props) => {

    const [ref, bounds] = useMeasure();
    const animatedHeight = useSpring({height: props.isExpanded ? bounds.height : 0, overflow: 'hidden'});

    return (
        <animated.div className={styles.animatedContainer} style={animatedHeight}>
            <div className={styles.container}  ref={ref}>
                <div className={styles.firstRow}>
                    <p className={rowItemStyles.title}>Job Title</p>
                    <a className={styles.newTabBtn} href="" target="_blank">
                        <OpenInNewIcon titleAccess="Open posting in new tab"/>
                        Open Tab
                    </a>
                </div>
                <p>Extra info here</p>
            </div>
        </animated.div>
    )
}

export { ExpandedContent };