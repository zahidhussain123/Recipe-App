import React from "react";
import style from "./recipe.module.css"
const Recipe = ({ image, calories, title, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ing) => (
          <li> {ing.text} </li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
