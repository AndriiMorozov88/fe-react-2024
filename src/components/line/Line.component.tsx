import type { ReactNode } from 'react';

import styles from './line.module.css';

interface Props {
    line: ReactNode;
}

export function LineComponent({ line }: Props) {
    return <li className={styles.li}>{line}</li>;
}
