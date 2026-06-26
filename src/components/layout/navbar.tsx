"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { useNavbarTheme } from "@/context/NavbarThemeContext";

export default function Navbar() {
  const { theme } = useNavbarTheme();

  return (
    <nav className={`${styles.navbar} ${theme === "onLight" ? styles.onLight : styles.onDark}`}>
      <div className={styles.blurLayer} aria-hidden="true" />

      <Link href="/" className={styles.logo}>
        <Image src="/images/logo.png" alt="Rstudio.in" width={40} height={40} />
      </Link>

      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/galleries">Galleries</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <button className={styles.bookBtn}>Book Now</button>
    </nav>
  );
}