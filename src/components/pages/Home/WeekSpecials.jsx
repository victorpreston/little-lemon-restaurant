import { HashLink } from "react-router-hash-link";
import bruschettaImage from "./assets/bruschetta.jpg";
import greekSaladImage from "./assets/greek-salad.jpg";
import lemonDessertImage from "./assets/lemon-dessert.jpeg";
import "./WeekSpecials.css";
import MealCard from "./MealCard";

const meals = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$10.00",
    description: `The famous greek salad of crispy lettuce, peppers, olives and
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary
      croutons.`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    price: "$6.79",
    description: `Our Bruschetta is made from grilled bread that has been
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$8.50",
    description: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials" id="menu">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <HashLink className="button-primary" to="/#menu">
          Online Menu
        </HashLink>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default WeekSpecials;
