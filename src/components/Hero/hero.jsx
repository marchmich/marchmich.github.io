import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Michelle! </h1>
        <p className={styles.description}>
        I am a Computer Science student with a passion for using technology to solve real-world problems. With experience in web development, data science, and computer vision, I enjoy blending technical skills with creative problem-solving to build impactful projects. I'm also committed to contributing to initiatives focused on sustainability and community engagement.
        </p>
        <a href="mailto:michellemarchesiniv@gmail.com" className={styles.contactBtn}>
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
