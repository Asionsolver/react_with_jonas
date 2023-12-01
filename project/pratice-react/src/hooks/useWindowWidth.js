import { useEffect, useState } from "react";

const useWindowWidth = (screenSize) => {
  const [onScreenSize, setOnScreenSize] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
        setOnScreenSize(window.innerWidth < screenSize);
      };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [screenSize]);

  return onScreenSize;
};

export default useWindowWidth;
