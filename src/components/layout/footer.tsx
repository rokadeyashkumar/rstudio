import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Rstudio.in"
              width={40}
              height={40}
            />
          </Link>
          <span className={styles.tagline}>Photography by passion, perfected by craft.</span>
        </div>

        {/* Social Links */}
        <div className={styles.social}>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://facebook.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size={20} />
          </a>
          <a href="https://pinterest.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <FaPinterest size={20} />
          </a>
          <a href="https://youtube.com/@yourhandle" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Rstudios.in weddings and films. All rights reserved.</p>
      </div>
    </footer>
  );
}