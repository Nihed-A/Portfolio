import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                    <a href="mailto:nihed.attia.officiel@gmail.com">nihed.attia.officiel@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/nihed-attia-56b1b0177/">linkedin.com/Nihed ATTIA</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                    <a href="https://github.com/Nihed-A">github.com/Nihed-A</a>
                </li>
                <li className={styles.link}>
                    <a href="tel:+21652110900">+216 52 110 900</a>
                </li>
            </ul>
        </footer>
    );
};