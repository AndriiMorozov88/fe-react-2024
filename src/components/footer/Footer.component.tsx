import fbLogo from '@/assets/icons/fb.svg';
import instLogo from '@/assets/icons/instagram.svg';
import linkedInLogo from '@/assets/icons/linked_in.svg';

import styles from './footer.module.css';

export function FooterComponent() {
    return (
        <>
            <footer className={styles.footer}>
                <section>
                    <img src={fbLogo} alt="fbLogo" />
                    <img src={linkedInLogo} alt="linkedInLogo" />
                    <img src={instLogo} alt="InstagramLogo" />
                </section>
                <section>
                    <p>
                        Made with 💗 on course{' '}
                        <a href="https://www.mastersacademy.education/frontend-for-beginners-it">
                            &apos;Intro to React&apos; from Masters Academy in 2024
                        </a>
                        , by Andrii Morozov
                    </p>
                </section>
            </footer>
        </>
    );
}
