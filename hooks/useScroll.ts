import { useState, useEffect } from "react";

const useScroll = () => {
  const [isOut, setIsOut] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsOut(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return isOut;
};

export default useScroll;
