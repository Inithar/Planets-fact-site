import React, { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const updateWindowWidth = () => {
      const newWidth = window.innerWidth;
      newWidth >= 768 ? setIsMobile(false) : setIsMobile(true);
    };

    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  return isMobile;
};
