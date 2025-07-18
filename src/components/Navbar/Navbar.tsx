// Navbar.tsx
import { useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import resumePath from "../../assets/GerardoLopezCV.pdf";
import styles from './Navbar.module.css';

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [linePosition, setLinePosition] = useState(92); // Default position

  // Create refs for measuring element heights
  const brandRef = useRef<HTMLParagraphElement>(null);
  const navbarOptionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);

    // Initial call to set progress on mount
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // only override style when active; else leave default CSS
  const homeStyle       = pathname === '/'            ? { color: 'black' } : undefined;
  const projectsStyle   = pathname === '/projects'    ? { color: 'black' } : undefined;
  const experienceStyle = pathname === '/experience'  ? { color: 'black' } : undefined;
  const techStyle       = pathname === '/tech_skills' ? { color: 'black' } : undefined;

  // Add responsive class to the CSS module
  const [isResponsive, setIsResponsive] = useState(false);

  // Ensure navbar is closed on every load and on each route change
  useEffect(() => {
    setIsResponsive(false);
    const line1 = document.querySelector(`.${styles.line1}`) as HTMLElement | null;
    const line2 = document.querySelector(`.${styles.line2}`) as HTMLElement | null;
    const line3 = document.querySelector(`.${styles.line3}`) as HTMLElement | null;
    if (line1 && line2 && line3) {
      line1.style.transform = '';
      line2.style.transform = '';
      line2.style.opacity   = '1';
      line3.style.transform = '';
    }
  }, [pathname]);

  // Calculate line position based on navbar elements and responsive state
  useEffect(() => {
    const calculatePosition = () => {
      const isMobileView = window.innerWidth <= 780;
      let position = 92; // Default fallback position

      if (isMobileView) {
        if (brandRef.current) {
          const brandRect = brandRef.current.getBoundingClientRect();
          position = brandRect.bottom + 10; // +10px margin-bottom
        } else {
          position = 80; // Fallback for mobile
        }
      } else if (isResponsive) {
        if (brandRef.current) {
          position = brandRef.current.getBoundingClientRect().bottom;
        }
      } else {
        if (navbarOptionsRef.current) {
          position = navbarOptionsRef.current.getBoundingClientRect().bottom;
        }
      }

      position = Math.max(position, 60); // Minimum 60px
      setLinePosition(position);
    };

    calculatePosition();
    window.addEventListener('resize', calculatePosition);
    const timeoutId = setTimeout(calculatePosition, 100);

    return () => {
      window.removeEventListener('resize', calculatePosition);
      clearTimeout(timeoutId);
    };
  }, [isResponsive]);

  function toggleNavbar() {
    const line1 = document.querySelector(`.${styles.line1}`) as HTMLElement | null;
    const line2 = document.querySelector(`.${styles.line2}`) as HTMLElement | null;
    const line3 = document.querySelector(`.${styles.line3}`) as HTMLElement | null;

    if (!line1 || !line2 || !line3) return;

    setIsResponsive(!isResponsive);

    const isHamburger =
      line1.style.transform === 'rotate(-45deg) translateY(9px) translateX(-9px)' &&
      line2.style.transform === 'translateX(40px)' &&
      line3.style.transform === 'rotate(45deg) translateY(-9px) translateX(-9px)';

    if (isHamburger) {
      line1.style.transform = '';
      line2.style.transform = '';
      line2.style.opacity   = '1';
      line3.style.transform = '';
    } else {
      line1.style.transform = 'rotate(-45deg) translateY(9px) translateX(-9px)';
      line2.style.transform = 'translateX(40px)';
      line2.style.opacity   = '0';
      line3.style.transform = 'rotate(45deg) translateY(-9px) translateX(-9px)';
    }
  }

  return (
    <>
      <div className={`${styles.navbar} ${isResponsive ? styles.responsive : ''}`}>
        <a className={styles.icon} onClick={toggleNavbar}>
          <div className={`${styles.line} ${styles.line1}`}></div>
          <div className={`${styles.line} ${styles.line2}`}></div>
          <div className={`${styles.line} ${styles.line3}`}></div>
        </a>

        <p ref={brandRef} className={styles.brand}>Gerardo Lopez Jr</p>

        <div ref={navbarOptionsRef} className={styles.navbarOptions}>
          <a href="#/"           className={styles.silent} style={homeStyle}>HOME</a>
          <a href="#/projects"   className={styles.silent} style={projectsStyle}>PROJECTS</a>
          <a href="#/experience" className={styles.silent} style={experienceStyle}>EXPERIENCE</a>
          <a href="#/tech_skills" className={styles.silent} style={techStyle}>TECHNICAL SKILLS</a>
          <a href={resumePath} target="_blank" rel="noopener noreferrer" className={styles.silent}>CV</a>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <hr
          className={styles.divideTop}
          style={{
            position: 'fixed',
            top: `${linePosition}px`,
            width: '100%',
            margin: 0,
            padding: 0,
            zIndex: 1000,
            borderTop: '1px solid #e5e5e5',
            borderBottom: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            display: 'block',
            visibility: 'visible'
          }}
        />
        <div
          className="scroll-progress-indicator"
          style={{
            width: `${scrollProgress}%`,
            height: '1px',
            backgroundColor: 'black',
            position: 'fixed',
            top: `${linePosition}px`,
            left: 0,
            zIndex: 1001,
            display: 'block',
            visibility: 'visible'
          }}
        />
      </div>
    </>
  );
}
