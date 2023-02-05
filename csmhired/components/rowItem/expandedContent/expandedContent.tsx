// Vendor imports
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';
import { animated, useSpring } from '@react-spring/web';

// style imports
import styles from './expandedContent.module.scss';

type Props = {
    isExpanded: boolean,
}

const ExpandedContent = (props: Props) => {

    const [ref, bounds] = useMeasure();
    const animatedHeight = useSpring({height: props.isExpanded ? bounds.height : 0, overflow: 'hidden'});

    return (
        <animated.div className={styles.animatedContainer} style={animatedHeight}>
            <div className={styles.container}  ref={ref}>
                <p>Extra info here</p>
            </div>
        </animated.div>
    )
}

export { ExpandedContent };