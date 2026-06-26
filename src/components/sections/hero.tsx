"use client";

import { useEffect } from "react";
import { useNavbarTheme } from "@/context/NavbarThemeContext";
import styles from "./hero.module.scss";

export default function Hero() {
  const { setTheme } = useNavbarTheme();

  useEffect(() => {
    setTheme("onDark"); // this hero image is dark, so navbar text goes white
  }, [setTheme]);

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>Your Story. Beautifully Captured.</h1>
        <p>
          Whether it&apos;s a wedding, a milestone, a brand, or a portrait, we
          create photographs that preserve emotions long after the moment has
          passed.
        </p>
        <div className={styles.actions}>
          <button className={styles.primaryBtn}>Let&apos;s Capture Your Story</button>
          <button className={styles.secondaryBtn}>View Portfolio</button>
        </div>
      </div>
    </section>
  );
}