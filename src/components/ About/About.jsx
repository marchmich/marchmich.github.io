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
            <img src={getImageUrl("about/boxicon.png")} alt="Cursor icon"/>
            <div className={styles.aboutItemText}>
              <h3>Data Science Enthusiast</h3>
              <p>
              I enjoy working with large datasets, analyzing and visualizing data to support decision-making. I am excited to apply my skills in Python, R and machine learning to solve real-world problems.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Computer Vision Researcher</h3>
              <p>
              I’m conducting Honor's research focused on using computer vision to identify and classify species within a conservation area. By developing AI-driven solutions, I aim to contribute to environmental protection and wildlife conservation efforts.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-stack Developer</h3>
              <p>
              As a full stack developer, I thrive on creating dynamic, end-to-end web applications. From crafting intuitive frontends to building robust backends, I aim to deliver seamless and impactful digital experiences.
             </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};