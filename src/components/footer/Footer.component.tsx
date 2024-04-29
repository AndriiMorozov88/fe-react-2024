import fbLogo from '@/assets/icons/fb.svg';
import instLogo from '@/assets/icons/instagram.svg';
import linkedInLogo from '@/assets/icons/linked_in.svg';

import { IconComponent } from '../icon/Icon.component';

import styles from './footer.module.css';

export function FooterComponent() {
    return (
        <>
            <footer className={styles.footer}>
                <section className={styles.footer__logoContainer}>
                    <IconComponent src={fbLogo} alt="fbLogo" />
                    <IconComponent src={linkedInLogo} alt="linkedInLogo" />
                    <IconComponent src={instLogo} alt="InstagramLogo" />
                </section>
                <section>
                    <p className={styles.footer__description}>
                        Made with 💗 on course{' '}
                        <a className={styles.footer__link} href="https://www.mastersacademy.education/frontend-for-beginners-it">
                            &apos;Intro to React&apos; from Masters Academy in 2024
                        </a>
                        , by Andrii Morozov
                    </p>
                </section>
            </footer>
        </>
    );
}
