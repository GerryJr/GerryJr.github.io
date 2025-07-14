// Navbar.tsx
import { useLocation } from 'react-router-dom';

import resumePath from "src/assets/Gerardo_Lopez_CV.pdf";

export default function Navbar() {
  const { pathname } = useLocation();

  // only override style when active; else leave default CSS
  const homeStyle       = pathname === '/'            ? { color: 'black' } : undefined;
  const projectsStyle   = pathname === '/projects'    ? { color: 'black' } : undefined;
  const experienceStyle = pathname === '/experience'  ? { color: 'black' } : undefined;
  const techStyle       = pathname === '/tech_skills' ? { color: 'black' } : undefined;

  function toggleNavbar() {
    const line1 = document.getElementById('line1') as HTMLElement | null;
    const line2 = document.getElementById('line2') as HTMLElement | null;
    const line3 = document.getElementById('line3') as HTMLElement | null;
    const navbar = document.getElementById('navbar') as HTMLElement | null;

    if (!line1 || !line2 || !line3 || !navbar) return;

    /* open / close the mobile menu */
    navbar.classList.toggle('responsive');

    /* animate the three lines into an X and back */
    const isHamburger =
      line1.style.transform === 'rotate(-45deg) translateY(9px) translateX(-9px)' &&
      line2.style.transform === 'translateX(40px)' &&
      line3.style.transform === 'rotate(45deg) translateY(-9px) translateX(-9px)';

    if (isHamburger) {
      line1.style.transform = '';
      line2.style.transform = '';
      line2.style.opacity = '1';
      line3.style.transform = '';
    } else {
      line1.style.transform = 'rotate(-45deg) translateY(9px) translateX(-9px)';
      line2.style.transform = 'translateX(40px)';
      line2.style.opacity = '0';
      line3.style.transform = 'rotate(45deg) translateY(-9px) translateX(-9px)';
    }
  }

  return (
    <>
      <div id="navbar">
        <a className="icon" onClick={toggleNavbar}>
          <div id="line1" className="line"></div>
          <div id="line2" className="line"></div>
          <div id="line3" className="line"></div>
        </a>

        <p id="brand">Gerardo Lopez Jr</p>

        <div id="navbar-options">
          <a href="#/" className="silent" style={homeStyle}>HOME</a>
          <a href="#/projects" className="silent" style={projectsStyle}>PROJECTS</a>
          <a href="#/experience" className="silent" style={experienceStyle}>EXPERIENCE</a>
          <a href="#/tech_skills" className="silent" style={techStyle}>TECHNICAL SKILLS</a>
          <a href={resumePath} target="_blank" rel="noopener noreferrer" className="silent">CV</a>
        </div>
      </div>
      <hr id="divide-top" className="small-light-grey-line"/>
    </>
  );
}
