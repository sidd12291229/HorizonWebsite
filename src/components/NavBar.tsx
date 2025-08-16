import { useEffect, useState } from 'react';

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const scrollThreshold = 300;

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav id="navbar" className={showNavbar ? 'visible' : 'hidden'}>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#questions">Questions</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
