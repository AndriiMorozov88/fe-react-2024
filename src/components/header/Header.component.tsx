import cartLogo from '@/assets/icons/cart.svg';
import dividerLogo from '@/assets/icons/divider.svg';
import mocLogo from '@/assets/icons/logo.svg';
import moonLogo from '@/assets/icons/moon.svg';
import sunLogo from '@/assets/icons/sun.svg';

import { ButtonComponent } from '../button/Button.component.tsx';
import { LineComponent } from '../line/Line.component.tsx';

import { liNames } from './header_data.js';

import styles from './header.module.css';

export function HeaderComponent() {
    return (
        <>
            <header className={styles.header}>
                <img src={mocLogo} alt="mocLogo" />
                <div className={styles.header__switcherContainer}>
                    <button className={styles.switcherContainer__button}>
                        <img src={sunLogo} alt="sunLogo" />
                    </button>
                    <img src={dividerLogo} alt="dividerLogo" />
                    <button className={styles.switcherContainer__button}>
                        <img className={styles.switcherContainer__logoDisabled} src={moonLogo} alt="moonLogo" />
                    </button>
                </div>
                <ul className={styles.header__menu}>
                    <LineComponent line={liNames[0]} />
                    <LineComponent line={liNames[1]} />
                </ul>
                <img src={cartLogo} alt="cartLogo" />
                <ButtonComponent>
                    <div className={styles.red}></div>
                </ButtonComponent>
                <ButtonComponent>122</ButtonComponent>
                <ButtonComponent>1121</ButtonComponent>
            </header>
        </>
    );
}
