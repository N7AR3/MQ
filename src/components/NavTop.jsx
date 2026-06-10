import { useContext, useEffect, useState } from "react";
import classes from "./NavTop.module.css";
import languageContext from "../contexts/languageContext";
import LanSelect from "./LanSelect";

export default function NavTop() {
  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <div className={classes.navContainer}>
          {/* <div className={classes.links}>
            <Link> {lan === "en" ? "Take a Tour" : "Bir Tur At"} </Link>
          </div> */}
          <LanSelect listDirection="down" />
        </div>
      </nav>
    </div>
  );
}
