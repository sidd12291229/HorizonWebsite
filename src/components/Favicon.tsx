import React, { useEffect } from 'react';
import HorizonLogo from '../assets/HorizonNetwork.svg';

const Favicon: React.FC = () => {
  useEffect(() => {
    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    link.type = 'image/svg+xml';
    link.href = HorizonLogo;
  }, []);

  return null;
};

export default Favicon;
