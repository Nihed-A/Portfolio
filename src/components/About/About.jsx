import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in building responsive
                                and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimised back-end systems
                                and APIs
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>
                                I have designed multiple landing pages and have created design
                                systems as well
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/Gear icon.png")}
                            alt="Gear icon"
                            className={`${styles.aboutImage} ${styles.smallIcon}`}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>DevOps Engineer</h3>
                            <p>
                                Skilled in automating deployment processes, containerizing applications,
                                and managing CI/CD pipelines for efficient and reliable releases.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cloudIcon.png")}
                            alt="Cloud icon"
                            className={styles.smallIcon} // Optional: use this if you want to control size with CSS
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Cloud Engineer</h3>
                            <p>
                                Experienced in managing cloud infrastructure on **AWS**, **Digital Ocean**, and
                                **Azure**, ensuring scalable and secure deployment environments.
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};