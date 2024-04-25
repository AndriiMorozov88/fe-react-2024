import styles from './line.module.css';

export function LineComponent({ line }) {
    return <li className={styles.li}>{line}</li>;
}
