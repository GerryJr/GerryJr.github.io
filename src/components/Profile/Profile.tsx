import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import profilePicture from "../../assets/ProfilePic.png";
import styles from "./Profile.module.css";

export default function Profile() {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 780);
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const isHome = pathname === "/";

  // • Desktop (normal mode) → always show
  // • Mobile → show **only** on home page
  const shouldShow = isMobile ? isHome : true;
  if (!shouldShow) return null;

  return (
    <div className={isMobile ? styles.mobileVisible : ""}>
      <img id="selfie" src={profilePicture} alt="Gerardo Selfie" />
      <p><strong>Gerardo Lopez Jr.</strong></p>
      <p><em>Bachelors Mathematics</em></p>
      <p><em>Emphasis in AI in Education</em></p>
      <p><em>University of California, Irvine</em></p>
      <p className={styles.silent}>gerardolopezjr1178@gmail.com</p>
    </div>
  );
}
