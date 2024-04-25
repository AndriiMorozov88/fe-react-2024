import type { ReactNode } from 'react';

import styles from './button.module.css';

interface Props {
    children: ReactNode;
    className: string;
}

export function ButtonComponent({ children, className }: Props) {
    return <button className={`${styles.button} + ${className}`}>{children}</button>;
}
