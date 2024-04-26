import burgerLogo from '@/assets/icons/burger.svg';
import cartLogo from '@/assets/icons/cart.svg';
import dividerLogo from '@/assets/icons/divider.svg';
import logInLogo from '@/assets/icons/log_in.svg';
import mocLogo from '@/assets/icons/logo.svg';
import moonLogo from '@/assets/icons/moon.svg';
import signUpLogo from '@/assets/icons/sign_up.svg';
import sunLogo from '@/assets/icons/sun.svg';

import { ButtonComponent } from '../button/Button.component.tsx';
import { LineComponent } from '../line/Line.component.tsx';

import { liNames } from './header_data.js';

import styles from './header.module.css';

export function HeaderComponent() {
    return (
        <>
            <header className={styles.header}>
                <section className={styles.headerSection}>
                    <img src={mocLogo} alt="mocLogo" />
                </section>
                <section className={styles.headerSection}>
                    <div className={styles.header__switcherContainer}>
                        <button className={styles.switcherContainer__button}>
                            <img src={sunLogo} alt="sunLogo" />
                        </button>
                        <img src={dividerLogo} alt="dividerLogo" />
                        <button className={styles.switcherContainer__button}>
                            <img className={styles.switcherContainer__logoDisabled} src={moonLogo} alt="moonLogo" />
                        </button>
                    </div>
                </section>
                <section className={`${styles.headerSection} + ${styles.headerSectionMenu}`}>
                    <ul className={styles.header__menu}>
                        <LineComponent line={liNames[0]} />
                        <LineComponent line={liNames[1]} />
                    </ul>
                </section>
                <section className={styles.headerSection}>
                    <img src={cartLogo} alt="cartLogo" />
                    <img className={styles.sectionBurger} src={burgerLogo} alt="burgerLogo" />
                </section>
                {/* <section className={`${styles.headerSection} + ${styles.sectionBurger}`}>
                    <img src={burgerLogo} alt="burgerLogo" />
                </section> */}
                <section className={`${styles.headerSection} + ${styles.sectionButtons}`}>
                    <ButtonComponent className={styles.logInButton}>
                        <img src={logInLogo} alt="logInLogo" />
                        <p>Login</p>
                    </ButtonComponent>
                    <ButtonComponent className={styles.signUpButton}>
                        <img src={signUpLogo} alt="signUpLogo" />
                        <p>Sign Up</p>
                    </ButtonComponent>
                </section>
            </header>
        </>
    );
}
