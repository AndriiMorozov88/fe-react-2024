import sprite from '@/assets/sprite.svg';

import styles from './header.module.css';

export function HeaderComponent() {
    return (
        <>
            <header className={styles.header}>
                <svg className={styles.header__logo}>
                    <use xlinkHref={`${sprite}#logo`}></use>
                </svg>
                <svg className={styles.header__logo}>
                    <use xlinkHref={`${sprite}#sun`}></use>
                </svg>
                <svg className={styles.header__logo}>
                    <use xlinkHref={`${sprite}#moon`}></use>
                </svg>
            </header>
        </>
    );
}
