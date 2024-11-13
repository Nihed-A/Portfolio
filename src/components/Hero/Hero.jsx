// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Nihed</h1>
                <p className={styles.description}>
                    I'm Software Architect specializing in DevOps and Cloud, with a strong background in networking, system
                    administration, and cloud computing. Equipped with a fast learning ability and a dynamic, sociable
                    personality. Reach out if you'd like to learn more!
                </p>
                <a href="mailto:myemail@email.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};