import { useCallback, useEffect, useState } from "react";
import classes from "./ScrollUp.module.css";
import up from "../assets/logoes/up.png";

const ScrollUp = () => {
  const [visibility, setVisibility] = useState(false);
  const handleVisibility = useCallback(() =>
    window.scrollY > 800 ? setVisibility(true) : setVisibility(false)
  );

  useEffect(() => {
    const timeOut = setTimeout(
      () => window.addEventListener("scroll", handleVisibility),
      120
    );
    return () => {
      window.removeEventListener("scroll", handleVisibility);
      clearTimeout(timeOut);
    };
  });
  return (
    <div
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
      className={visibility ? classes.container : classes.containerHidden}
    >
      <img src={up} alt="" />
    </div>
  );
};

export default ScrollUp;
