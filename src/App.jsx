import React, { useState, useEffect } from "react";
import "./App.css"
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "e49bd47a";
  const APP_PIN = "736e6d21fdca7a274e2f8ccc4c129912";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [question, setQuestion] = useState("chicken");
  const exampleReq = `https://api.edamam.com/search?q=${question}&app_id=${APP_ID}&app_key=${APP_PIN}`;

  useEffect(() => {
    getRecipe();
  }, [question]);

  const getRecipe = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipe(data.hits);
  };

  const getData = (e) => {
    e.preventDefault();
    setQuestion(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form className="input-form" onSubmit={getData}>
        <input
          type="text"
          className="input-type"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="input-button" type="submit">
          Search
        </button>
      </form>
      <div className="map-item">
      {recipe.map((item) => (
        <Recipe
          key={item.recipe.label}
          title={item.recipe.label}
          calories={item.recipe.calories}
          image={item.recipe.image}
          ingredients={item.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
