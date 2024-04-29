import mainImage from '@/assets/orange_staircase.jpg';

import styles from './about.module.css';

export function AboutComponent() {
    return (
        <>
            <main className={styles.main}>
                <section className={styles.about}>
                    <section className={styles.about__imageContainer}>
                        <img className={styles.about__image} src={mainImage} alt="Orange Staircase" />
                    </section>
                    <section className={styles.about__description}>
                        <h1 className={styles.about__heading}>About Me</h1>
                        <p className={styles.about__text}>
                            Hi! My name is Andrii Morozov and I&apos;m a Junior Frontend Developer. I am already familiar with main Web
                            Technologies like React, HTML, CSS, JavaScript and Git version control system.
                        </p>
                        <p className={styles.about__text}>
                            This page was developed during the course &apos;
                            <a
                                className={styles.about__link}
                                target="blank"
                                href="https://www.mastersacademy.education/frontend-for-beginners-it"
                            >
                                Intro to React
                            </a>
                            &apos; from Masters Academy in 2024.
                        </p>
                        <p className={styles.about__text}>
                            This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to
                            create my own small project for the portfolio.
                        </p>
                        <p className={styles.about__text}>
                            You can contact me via&nbsp;
                            <a className={styles.about__link} target="blanc" href="https://t.me/slonyara8888">
                                telegram
                            </a>
                            &nbsp;and check out my&nbsp;
                            <a className={styles.about__link} target="blanc" href="https://github.com/">
                                GitHub
                            </a>
                            .
                        </p>
                    </section>
                </section>
            </main>
        </>
    );
}
