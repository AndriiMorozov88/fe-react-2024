import sprite from '@/assets/sprite.svg';

import styles from './header.module.css';

export function HeaderComponent() {
    return (
        <>
            <header className={styles.header}>
                <svg className={styles.header__logo}>
                    <use xlinkHref={`${sprite}#logo`}></use>
                </svg>
                <div className={styles.header__switcherContainer}>
                    <button className={styles.switcherContainer__button}>
                        <svg className={`${styles.switcherContainer__logo} ${styles.switcherContainer__logoActive}`}>
                            <use xlinkHref={`${sprite}#sun`}></use>
                        </svg>
                    </button>
                    <svg>
                        <use xlinkHref={`${sprite}#divider`}></use>
                    </svg>
                    <button className={styles.switcherContainer__button}>
                        <svg className={`${styles.switcherContainer__logo} ${styles.switcherContainer__logoDisabled}`}>
                            <use xlinkHref={`${sprite}#moon`}></use>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
}
