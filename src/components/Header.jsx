import React, { useContext, useEffect, useState } from "react";
import NavTop from "./NavTop";
import NavMain from "./NavMain";
import classes from "./Header.module.css";
import languageContext from "../contexts/languageContext";
import MobileNav from "./MobileNav";
import reklam_eng from "./../assets/Pictures/reklam/blackfriday-modal-en.jpg"
import reklam from "./../assets/Pictures/reklam/blackfriday-modal-tr.jpg"
import { useLocation } from "react-router-dom";
// import popUpVideo from '../assets/videos/ramazan_bayrami.mp4'

export default function Header({ links, logoLink, underLine, main, booking }) {
  const [navtop, setNavtop] = useState(true);
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  const [mobileNav, setMobileNav] = useState(false);
  const [popUp, setPopUp] = useState(false)
  const [popUpLock, setPopUpLock] = useState(false)
  const { lan } = useContext(languageContext);

  const { pathname } = useLocation();

  const handleScroll = () => {
    if (y > window.scrollY) {
      setNavtop(true);
    } else if (y < window.scrollY) {
      setNavtop(false);
    }
    setY(window.scrollY);
    if(window.scrollY > 300 && !popUpLock){
      setPopUp(true)
    } 
  };

  useEffect(() => setMobileNav(false), [pathname]);


  useEffect(() => {
    const timeOut = setTimeout(
      () => window.addEventListener("scroll", handleScroll),
      120
    );
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeOut);
    };
  });


  return (
    <>
       {main && <div className={classes.container}>
        <div className={classes.popUpContainer}> 
          {/* <div className={popUp && !popUpLock? classes.popUp : classes.popUpDown}> */}
            {/*<video
            className={classes.popUpVideo}
              id="popUpVideo"
              autoPlay={true}
              muted
              controls
            >
              <source src={popUpVideo} />
            </video> */}
            {  
              // lan === 'tr' ? <img className={classes.popUpVideo} src={reklam} alt="reklam" /> : lan === 'en' ? <img className={classes.popUpVideo} src={reklam_eng} alt="reklam" /> : <img className={classes.popUpVideo} src={reklam} alt="reklam" /> 
            }  

            {/* <div className={classes.popUpClose} onClick={() => {setPopUp(false); setPopUpLock(true)}}>
              x
            </div> */}
          </div>
          {/* <div className={popUpLock ? classes.popUpOpen : classes.popUpOpenDown} onClick={() => {setPopUpLock(false); setPopUp(true)}}> ^ </div> */}
        {/* </div> */}
      </div>  }
      <nav className={classes.nav}>
        <MobileNav mobileNav={mobileNav} lan={lan} />
        {navtop && <NavTop />}
        <NavMain
          booking={booking}
          main={main}
          underLine={underLine}
          logoLink={logoLink}
          links={links}
          lan={lan}
          onChangeMobileNav={setMobileNav}
          mobileNav={mobileNav}
        />
      </nav>
    </>
  );
}
