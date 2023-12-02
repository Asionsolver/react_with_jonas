import { useCallback, useEffect, useState } from "react";

const useWindowWidth = (screenSize) => {
  const [onScreenSize, setOnScreenSize] = useState(false);

  const checkScreenSize = useCallback(() => {
    setOnScreenSize(window.innerWidth < screenSize);
  }, [screenSize]);

  // First Solution
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [checkScreenSize]);

  // Second Solution
  // useEffect(() => {
  //   const checkScreenSize = () => {
  //       setOnScreenSize(window.innerWidth < screenSize);
  //     };
  //   checkScreenSize();
  //   window.addEventListener("resize", checkScreenSize);
  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, [screenSize]);

  return onScreenSize;
};

export default useWindowWidth;
