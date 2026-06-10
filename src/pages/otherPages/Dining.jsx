import classes from "./Dining.module.css";
import all from "../../assets/logoes/dining/all.png";
import breakfast from "../../assets/logoes/dining/breakfast.png";
import omelet from "../../assets/logoes/dining/omelet.png";
import soup from "../../assets/logoes/dining/soup.png";
import hotAppetizers from "../../assets/logoes/dining/hot_appetizer.png";
import pasta from "../../assets/logoes/dining/pasta.png";
import appetizer from "../../assets/logoes/dining/appetizer.png";
import salad from "../../assets/logoes/dining/salad.png";
import mainDishes from "../../assets/logoes/dining/main_dishes.png";
import vegeterian from "../../assets/logoes/dining/vegeterian.png";
import fish from "../../assets/logoes/dining/fish.png";
import dessert from "../../assets/logoes/dining/dessert.png";
import softBeverages from "../../assets/logoes/dining/soft_drinks.png";
import alcohol from "../../assets/logoes/dining/alcohol.png";
import { useEffect, useState } from "react";

const Dining = () => {
  // to scroll up the meals list to the top when the category changes
  const [header, setHeader] = useState("All");

  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      }),
    [header]
  );

  return (
    <div className={classes.container}>
      <section className={classes.left}>
        <div className={classes.search}>
          <input type="text" placeholder="Search" />
        </div>
        <ul className={classes.menuItems}>
          {diningLinks.map((link, i) => (
            <li
              key={i}
              className={classes.menuItem}
              onClick={() => setHeader(link.name)}
            >
              <div className={classes.imgContainer}>
                <img src={link.src} alt="" />
              </div>
              <h4> {link.name} </h4>
            </li>
          ))}
        </ul>
      </section>
      <section id="middle" className={classes.middle}>
        <div className={classes.header}>
          <h3> {header} </h3>
        </div>
        <div className={classes.middleContainer}>
          <div className={classes.foodBox}></div>
          <div className={classes.foodBox}></div>
          <div className={classes.foodBox}></div>
          <div className={classes.foodBox}></div>
          <div className={classes.foodBox}></div>
          <div className={classes.foodBox}></div>
          <div className={classes.foodBox}></div>
          <div className={classes.foodBox}></div>
        </div>
      </section>
      <section className={classes.right}></section>
    </div>
  );
};

export default Dining;

const diningLinks = [
  {
    name: "All",
    src: all,
  },
  {
    name: "Breakfast",
    src: breakfast,
  },
  {
    name: "Omelet",
    src: omelet,
  },
  {
    name: "Soup",
    src: soup,
  },
  {
    name: "Hot Appetizers",
    src: hotAppetizers,
  },
  {
    name: "Pasta",
    src: pasta,
  },
  {
    name: "Appetizer",
    src: appetizer,
  },
  {
    name: "Salads",
    src: salad,
  },
  {
    name: "Main Dishes",
    src: mainDishes,
  },
  {
    name: "Vegeterian",
    src: vegeterian,
  },
  {
    name: "Fish",
    src: fish,
  },
  {
    name: "Desserts",
    src: dessert,
  },
  {
    name: "Soft Beverages",
    src: softBeverages,
  },
  {
    name: "Alcohol",
    src: alcohol,
  },
];
