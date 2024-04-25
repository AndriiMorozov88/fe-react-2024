import styles from './button.module.css';

export function ButtonComponent({ children }) {
    return <button className={styles.button}>{children}</button>;
}
